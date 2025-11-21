import json
import random
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

def load(filename):
    path = os.path.join(BASE_DIR, "data", filename)
    with open(path, "r") as f:
        return json.load(f)
    
fruits = load("fruits.json")
bases = load("bases.json")
enhancers = load("enhancers.json")

adjectives = ["Tropical", "Velvet", "Sunrise", "Electric", "Frosted"]

def generate_name(fruit):
    return f"{random.choice(adjectives)} {fruit} Smoothie"

def generate_smoothie(options):
    flavors = options.get("flavors", [])
    restrictions = options.get("restrictions", [])

    possible_fruits = [f["name"] for f in fruits if not flavors or f["name"] in flavors]
    fruit = random.choice(possible_fruits)

    if "dairy_free" in restrictions:
        allowed_bases = [b["name"] for b in bases if b["type"] != "dairy"]
    else:
        allowed_bases = [b["name"] for b in bases]

    base = random.choice(allowed_bases)
    enhancer = random.choice([e["name"] for e in enhancers])

    return {
        "name": generate_name(fruit),
        "ingredients": [fruit, base, enhancer],
        "steps": [
            "Add all ingredients to a blender.",
            "Blend until smooth and creamy.",
            "Serve on a chilled glass and enjoy!"
        ]
    }
