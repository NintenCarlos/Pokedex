from flask import Blueprint, jsonify
from app.models.factory import ModelFactory
from bson import ObjectId

bp = Blueprint("pokemons", __name__, url_prefix="/pokemon")
pkmn_model = ModelFactory.get_model("pokemons")

@bp.route("/all", method=["GET"])
def find_all_pokemon (): 
    pokemons = pkmn_model.find_all()
    return jsonify(pokemons, 200)

@bp.route("/<string:pkmn_id>", method=["GET"])
def get_pokemon(pkmn_id): 
    try:
        pokemon = pkmn_model.find_by_id(ObjectId(pkmn_id))
        
        if not pokemon: 
            return jsonify("No se encontró el Pokémon que buscas", 404)
        else: 
            return jsonify(pokemon, 200)
        
    except:
        return jsonify("Hubo un error", 400)