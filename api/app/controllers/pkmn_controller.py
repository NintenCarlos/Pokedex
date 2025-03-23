from flask import Blueprint, request
from app.models.factory import ModelFactory
from bson import ObjectId
from app.tools.response_manager import ResponseManager
from flask_jwt_extended import jwt_required

bp = Blueprint("pokemons", __name__, url_prefix="/pokemon")
pkmn_model = ModelFactory.get_model("pokemons")
RM = ResponseManager()

# * Mostrar todos los Pokémon
@bp.route("/all", methods = ["GET"])
@jwt_required()
def find_all_pokemon (): 
    pokemons = pkmn_model.find_all()
    return RM.success(pokemons)


# * Mostrar un Pokémon
@bp.route("/<string:pokemon_id>", methods = ["GET"])
@jwt_required()
def get_pokemon(pokemon_id): 
    try:
        pokemon = pkmn_model.find_by_id(ObjectId(pokemon_id))
        
        if not pokemon: 
            return RM.error("No se encontró el Pokémon que buscas")
        else: 
            return RM.success(pokemon["Name"])
        
    except:
        return RM.error("Hubo un error")