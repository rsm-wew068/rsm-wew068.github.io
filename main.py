import os
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import google.generativeai as genai

# --- Configuration ---
# You will need to set this environment variable in Cloud Run or locally
API_KEY = os.environ.get("GEMINI_API_KEY")

if API_KEY:
    genai.configure(api_key=API_KEY)

app = FastAPI()

# Enable CORS (helpful for development, though we serve static files from same origin)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Data Models ---
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

# --- Load Context ---
def load_context():
    """Loads the resume and portfolio content to feed to the model."""
    context = ""
    try:
        with open("resume.md", "r") as f:
            context += "RESUME CONTENT:\n" + f.read() + "\n\n"
    except FileNotFoundError:
        print("Warning: resume.md not found")
    
    # We could also add specific project details that might not be in the short resume
    # For now, resume.md is a good start.
    return context

SYSTEM_CONTEXT = load_context()

SYSTEM_PROMPT = f"""
You are the AI Assistant for Rachel Wang's portfolio website. 
Your goal is to answer questions about Rachel's professional background, skills, and projects based STRICTLY on the context provided below.

Rules:
1. Speak in a professional, enthusiastic, and friendly tone (Rachel is a Data Scientist/ML Engineer).
2. Use the "RESUME CONTENT" provided to answer questions.
3. If the answer is not in the context, politely say you don't have that information but suggest contacting Rachel directly (wew068@ucsd.edu).
4. Keep answers concise (under 3-4 sentences) unless the user asks for a detailed explanation.
5. Do NOT make up facts.

{SYSTEM_CONTEXT}
"""

# --- Model Setup ---
chat_session = None

if API_KEY:
    try:
        # Using Gemini 3 Flash Preview as requested
        model = genai.GenerativeModel(
            model_name="gemini-3-flash-preview", 
            system_instruction=SYSTEM_PROMPT
        )
        chat_session = model.start_chat(history=[])
    except Exception as e:
        print(f"Failed to initialize Gemini model: {e}")

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    if not chat_session:
         # Mock response if no session/key is present
        return ChatResponse(response="[System]: Gemini API Key not detected. I am currently running in offline mode. Please configure the GEMINI_API_KEY environment variable to chat with me!")

    try:
        response = chat_session.send_message(request.message)
        
        # Check if response has text content
        if response.text:
            return ChatResponse(response=response.text)
        else:
            print(f"Gemini returned no text. Finish reason: {response.candidates[0].finish_reason}")
            return ChatResponse(response="[System]: The AI thought about it but didn't have a response. Please try asking differently!")
            
    except Exception as e:
        print(f"Error calling Gemini: {e}")
        # If possible, print full response for debugging
        try:
            print(f"Full response object: {response}")
        except:
            pass
            
        return ChatResponse(response="I encountered a small hiccup processing that. Could you try asking again?")

# --- Static File Serving ---
# This must be last so it doesn't override API routes
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    # Cloud Run expects us to listen on the port defined by the PORT env var
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)
