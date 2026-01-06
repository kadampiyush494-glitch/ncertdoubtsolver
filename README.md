# NCERT Doubt Solver (Full Stack)

AI-powered NCERT doubt solving platform.

## Tech Stack
- Frontend: React + Vite + TypeScript
- Backend: FastAPI
- Vector Store: FAISS
- Embeddings: sentence-transformers (all-MiniLM-L6-v2)

## Project Structure
frontend/  → React app  
backend/   → FastAPI + RAG pipeline  

## How to Run Locally

### Backend
cd backend  
python -m venv venv  
.\venv\Scripts\activate  
pip install -r requirements.txt  
uvicorn backend.main:app --port 8001  

### Frontend
cd frontend  
npm install  
npm run dev  

## API
POST /ask → Ask NCERT questions