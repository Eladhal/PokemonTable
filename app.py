import os

from flask import Flask, jsonify, send_from_directory
import db

app = Flask(__name__, static_folder='frontend/build/static', template_folder='frontend/build')
@app.route('/icon/<name>')
def get_icon_url(name:str):
    return f"https://img.pokemondb.net/sprites/silver/normal/{name}.png"


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.template_folder + '/' + path):
        return send_from_directory(app.template_folder, path)
    else:
        return send_from_directory(app.template_folder, 'index.html')


@app.route('/data', methods=['GET'])
def get_data():
    data = db.get()
    return jsonify(data)


if __name__ == '__main__':
    app.run(port=8080)