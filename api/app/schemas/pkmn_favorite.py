from marshmallow import Schema, fields

class PkmnFavoriteSchema(Schema): 
    pkmn_id = fields.Str(
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages= {
            "required": "El nombre del Pokémon es necesario."
        }
    )
    
    user_id = fields.Str(
        required= True
    )