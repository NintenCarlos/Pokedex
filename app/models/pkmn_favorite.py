from app.models.super_class import SuperClass
from bson import ObjectId

class PokemonFavorites(SuperClass): 
    def __init__(self):
        super().__init__("pokemon_favorites")
        
    def update(self, object_id, data):
        raise NotImplementedError("No puedes actualizar Pokémon.")
    
    def find_by_id(self, object_id):
        raise NotImplementedError("No puedes actualizar Pokémon.")
    
    def find_all(self, user_id):
        data = self.collection.find({"user_id": ObjectId(user_id)})
        return list(data)
    
    def create(self, data):
        data["user_id"] = ObjectId(data["user_id"])
        data["pkmn_id"] = ObjectId(data["pkmn_id"])
        
        datum = self.collection.insert_one(data)
        return str(datum.inserted_id)