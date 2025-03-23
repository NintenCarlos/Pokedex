from app.models.super_class import SuperClass

class User(SuperClass):
    def __init__(self):
        super().__init__("users")
        
    def find_all(self):
        raise NotImplementedError("No es necesario obtener todos los usuarios.")
    
    def get_by_email_password(self, email):
        user = self.collection.find_one({
            "email": email
            # ! Le quité password porque tu colocas la contraseña, pero en la base de datos está la contraseña hasheada, ya que siempre regresaría None. Y si pones la contraseña hasheada, habrá un error ya que se tiene que volver a hashear. 
            
            # * Hasta aquí mi reporte Joaquín UnU
        })
        
        if user is None: 
            return None
        else: 
            user["_id"] = str(user["_id"])
            print(user)
            return user