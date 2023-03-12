import express from "express";

const app = express();

const livros = [
    {id:1, "titulo": "senhor dos Aneis"},
    {id:2, "titulo": "O hobiit"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/', (req, res) => {
    res.status(200).json(livros)
})

export default app
