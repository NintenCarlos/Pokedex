from flask import Blueprint, request
from app.schemas.pkmn_favorite import PkmnFavoriteSchema
from app.models.factory import ModelFactory
from bson import ObjectId
from marshmallow import ValidationError
from app.tools.response_manager import ResponseManager
from flask_jwt_extended import jwt_required, get_jwt_identity

RM = ResponseManager()
bp = Blueprint("pokemon_favorites", __name__, url_prefix="/favorite")
pkmn_fav_model = ModelFactory.get_model("pokemon_favorites")
pkn_fav_schema = PkmnFavoriteSchema()

# * Eliminar Pokémon Favorito
@bp.route("/<string:pkmn_id>", methods = ["DELETE"])
@jwt_required()
def delete (pkmn_id):
    pkmn_fav_model.delete(ObjectId(pkmn_id))
    return RM.success("Pokémon eliminado")

# * Agregar Pokémon favorito
@bp.route("/add", methods = ["POST"])
@jwt_required()
def register_pkmn():
    user_id = get_jwt_identity()
    try: 
        data = request.json
        data["user_id"] = user_id  
        data = pkn_fav_schema.load(data)
        pkmn_id = pkmn_fav_model.create(data)
        print("Pokémon guardado:", data)
        print(data)
        return RM.success({
            "pkmn_id": str(pkmn_id)
        })
        
    except ValidationError as err:
        print(err)
        return RM.error("Es necesario enviar todos los parámetros.")
 
# * Obtener todos los Pokémon favoritos.
@bp.route("", methods=["GET"])
@jwt_required()
def find_all_pokemon():
    user_id = get_jwt_identity()
    
    favs = pkmn_fav_model.find_all(user_id)

    return RM.success(favs)
