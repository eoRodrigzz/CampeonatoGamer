const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); //middleware = conecta front-end com backend
app.use(express.json()); //middleware = converte o body da requisição em json

let PARTIDAS = [
    {
        id: 1,
        jogo: "Arena Pixel",
        timeA: "Falcões",
        timeB: "Dragões",
        pontoA: 0,
        pontoB: 3,
        status: "Finalizado"
    },
    {
        id: 2,
        jogo: "Corrida Turbo",
        timeA: "Tigres",
        timeB: "Leões",
        pontoA: 0,
        pontoB: 0,
        status: "Agendada"
    },

];

app.get('/', (req, res) => {
    res.status(200).json({ message: "Campeonato Gamer no Ar!" });
});

app.get('/partidas', (req, res) => {
    res.status(200).json(PARTIDAS);
});

app.get('/partidas/:id', (req, res) => {
    const id = Number(req.params.id);
    const partida = PARTIDAS.find(p => p.id === id);


    if (!partida) {
        res.status(404).json({ message: "Partida não encontrada!" });
    }

    res.status(200).json(partida);
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});