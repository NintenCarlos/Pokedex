from app import mongo
from bson import ObjectId

class SuperClass:
    def __init__(self, collection):
        self.collection = mongo.db[collection]
    
    def find_all(self):
        data = self.collection.find()
        return list(data)
    
    def find_by_id (self, object_id): 
        datum = self.collection.find_one({
            "_id": object_id
        })
        
        if datum: 
            datum["_id"] = str(datum["_id"])
            
        return datum 
    
    def create(self, data):
        datum = self.collection.insert_one(data)
        return str(datum.inserted_id)
    
    def update(self, object_id, data):
        self.collection.update_one({
            "_id": ObjectId(object_id)
        }, {
            "$set": data
        })
        
        data = self.collection.find_one({
            "_id": object_id
        })
        
        if data: 
            data["_id"] = str(data["_id"])       
        
        return data
    
    def delete(self, object_id):
        return self.collection.delete_one({"_id": object_id})
    