from app.models.pokemon import Pokemon
from app.models.pkmn_favorite import PokemonFavorites
from app.models.user import User

class ModelFactory:
    @staticmethod
    def get_model(collection_name):
        models = {
            "users" : User,
            "pokemons": Pokemon,
            "pokemon_favorites": PokemonFavorites
        }
        
        if collection_name in models: 
            return models[collection_name]()
        else: 
            raise ValueError(f"La colección {collection_name} no existe.")