# main.py
from fastapi import FastAPI

app = FastAPI()  # 반드시 'app' 이름 사용

@app.get("/")
def read_root():
    return {"message": "Hello, YouTube Dashboard!"}
# FastAPI backend code here
