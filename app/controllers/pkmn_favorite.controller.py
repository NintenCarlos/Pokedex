from flask import Blueprint, jsonify, request
from app.schemas.pkmn_favorite import PkmnFavoriteSchema
from app.models.factory import ModelFactory
from bson import ObjectId
from marshmallow import ValidationError

bp = Blueprint("pokemon_favorites", __name__, url_prefix="/my-favorites")
pkmn_fav_model = ModelFactory.get_model("pokemon_favorites")
pkn_fav_schema = PkmnFavoriteSchema()


@bp.route("/delete-team/<string:user_id>", method=["DELETE"])
def delete (user_id):
    pkmn_fav_model.delete(ObjectId(user_id))
    return jsonify("Usuario eliminado", 200)

@bp.route("/add-my-team", methods = ["POST"])
def register():
    try: 
        data =  pkn_fav_schema.load(request.json)
        user_id = pkmn_fav_model.create(data)
        return jsonify({"user_id": str(user_id)}, 200)
        
    except ValidationError as err:
        return jsonify("Los parámetros enviados son incorrectos.", 400)
    
@bp.route("/my-team", method=["GET"])
def find_all_pokemon (): 
    favs = pkmn_fav_model.find_all()
    return jsonify(favs, 200)