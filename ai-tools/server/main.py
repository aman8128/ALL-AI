from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from data import get_tools, contact_us  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app ka URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    message: str
    subject: str
    
@app.get("/tools")
def fetch_tools():  # ← naam change kiya
    tools_data = get_tools()  # ← ab yeh data.py ka function call karega
    return JSONResponse(content={"tools": tools_data}, status_code=200)

@app.post("/contact")
async def contact(form: ContactForm):
    contact_id = contact_us(form.name, form.email, form.message, form.subject)
    return JSONResponse(content={"message": "Contact information submitted successfully", "id": contact_id}, status_code=201)