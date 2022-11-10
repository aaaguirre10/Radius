import os

from flask import Flask

app = Flask(__name__) # app name

@app.route("/") # app route
def create_app():    
    return "<h1>hello world<h1>"

if __name__ == "__main__":
    app.run(host = os.getenv('IP', '0.0.0.0'),
                port = int(os.getenv('PORT', 8080)))