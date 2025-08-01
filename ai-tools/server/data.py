from pymongo import MongoClient
import datetime

client = MongoClient("mongodb://localhost:27017/")
db = client["ai_tools_db"]
collection = db["tools"]

def get_tools():
    tools = []
    for tool in collection.find():
        tool["_id"] = str(tool["_id"])  # <-- Yeh important hai!
        tools.append(tool)

    return tools

def contact_us(name, email, message, subject):
    contact_info = {
        "name": name,
        "email": email,
        "message": message,
        "subject": subject,
        "created_at": datetime.datetime.now()  # Add timestamp
    }
    contacts_collection = db["contacts"]  # Different collection name
    result = contacts_collection.insert_one(contact_info)
    return str(result.inserted_id)
