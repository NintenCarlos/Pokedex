from app.models.super_class import SuperClass

class Pokemon(SuperClass):
    def __init__(self):
        super().__init__("pokemons")
        
    def create(self, data):
        raise NotImplementedError("No puedes crear Pokémon.")
    
    def update(self, object_id, data):
        raise NotImplementedError("No puedes actualizar Pokémon.")
    
    def delete(self, object_id):
        raise NotImplementedError("No puedes borrar Pokémon.")