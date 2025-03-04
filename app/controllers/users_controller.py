from flask import Blueprint, request
from app.schemas.user_schema import UserSchema
from marshmallow import ValidationError
from app.models.factory import ModelFactory
from bson import ObjectId
from app.tools.response_manager import ResponseManager
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from app.tools.encryption import EncryptionManager

RM = ResponseManager()
EM = EncryptionManager()
bp = Blueprint("users", __name__, url_prefix="/users")
user_schema = UserSchema()
user_model = ModelFactory.get_model("users")

# * Login
@bp.route("/login", methods = ["POST"])
def login():
    data = request.json
    email = data.get("email", None)
    password = data.get("password", None)
    
    if not email or not password:
        return RM.error("No tienes todas las credenciales")
    user = user_model.get_by_email_password(email)
    if not user: 
        return RM.error("No se encontró el usuario.")
    
    if not EM.compare_hashes(password, user["password"]): 
        return RM.error("Credenciales incorrectas.")
    
    return RM.success({
        "user": user,
        "token": create_access_token(user["_id"])
    })

# * Registrar
@bp.route("/register", methods=["POST"])
def register():
    try:
        data = user_schema.load(request.json)

        # * Hashear contraseña
        data["password"] = EM.create_hash(data["password"])

        user_id = user_model.create(data)
        return RM.success({
            "user_id": str(user_id), 
            "token": create_access_token(str(user_id))
        })

    except ValidationError as err:
        return RM.error("Los parámetros enviados son incorrectos.")
    
# ! Actualizar
@bp.route("", methods = ["PUT"])
@jwt_required()
def update():
    try:
        user_id = get_jwt_identity()
        print(user_id)
        data =  user_schema.load(request.json)
        data = dict(data)
         # * Hashear contraseña
        data["password"] = EM.create_hash(data["password"])
        
        user = user_model.update(ObjectId(user_id), data)

        return RM.success({
            "data": user
        })
        
    except ValidationError as err:
        return RM.error("Los parámetros enviados son incorrectos.")

# * Borrar
@bp.route("", methods = ["DELETE"])
@jwt_required()
def delete ():
    user_id = get_jwt_identity()
    user_model.delete(ObjectId(user_id))
    return RM.success("Usuario eliminado.")

# * Obtener
@bp.route("", methods = ["GET"])
@jwt_required()
def get_user(): 
    user_id = get_jwt_identity()
    user = user_model.find_by_id(ObjectId(user_id))
    
    if not user:
        return RM.error("El usuario no existe")
    
    return RM.success({
        "data": user
    })