from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from engine.smoothie_engine import generate_smoothie

app = FastAPI(title = "Smoothie Generator API")

#allow frontend calls
app.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class SmoothieRequest(BaseModel):
    flavors: list[str] = []
    restrictions: list[str] = []

@app.post("/generate")
def generate(request: SmoothieRequest):
    return generate_smoothie(request.dict())
