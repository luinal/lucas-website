# Portfólio Pessoal - Lucas Inácio

Este é o repositório do meu site pessoal, desenvolvido com React, TypeScript e Flask.

## Tecnologias Utilizadas

### Frontend
- React
- TypeScript
- Material-UI
- Framer Motion
- React Router

### Backend
- Python
- Flask
- SQLAlchemy
- Flask-CORS

## Pré-requisitos

- Node.js (versão 14 ou superior)
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

## Instalação

### Backend

1. Navegue até o diretório do backend:
```bash
cd backend
```

2. Crie um ambiente virtual Python:
```bash
python -m venv venv
```

3. Ative o ambiente virtual:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/Mac:
```bash
source venv/bin/activate
```

4. Instale as dependências:
```bash
pip install -r requirements.txt
```

### Frontend

1. Navegue até o diretório do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

## Executando o Projeto

### Backend

1. Certifique-se de que o ambiente virtual está ativado
2. Execute o servidor Flask:
```bash
python app.py
```

O servidor backend estará rodando em `http://localhost:5000`

### Frontend

1. Em um novo terminal, navegue até o diretório do frontend
2. Execute o servidor de desenvolvimento:
```bash
npm start
```

O site estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
lucas-portfolio/
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.tsx
    │   └── index.tsx
    ├── package.json
    └── tsconfig.json
```

## Contribuindo

Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 