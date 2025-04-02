from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/info', methods=['GET'])
def get_info():
    return jsonify({
        'name': 'Lucas Inácio',
        'title': 'Desenvolvedor e Cientista de Dados',
        'description': 'Especialista em desenvolvimento de software e análise de dados',
        'skills': [
            'Python',
            'JavaScript',
            'React',
            'Node.js',
            'TypeScript',
            'Data Science',
            'Machine Learning'
        ],
        'projects': [
            {
                'name': 'Projeto 1',
                'description': 'Descrição do projeto 1',
                'technologies': ['Python', 'React', 'Node.js'],
                'github': 'https://github.com/seu-usuario/projeto1'
            },
            {
                'name': 'Projeto 2',
                'description': 'Descrição do projeto 2',
                'technologies': ['Python', 'Data Science', 'Machine Learning'],
                'github': 'https://github.com/seu-usuario/projeto2'
            }
        ]
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 