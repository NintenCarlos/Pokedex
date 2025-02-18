from marshmallow import Schema, fields

class PkmnFavoriteSchema(Schema): 
    pokemon = fields.Str(
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages= {
            "required": "El nombre del Pokémon es necesario."
        }
    )