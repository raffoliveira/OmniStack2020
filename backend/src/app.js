const express = require('express'); //express cria rota mais faceis de usar
const routes = require('./route'); //importando o arquivo route. usar (./) para referenciar. se quiser voltar mais uma pasta use (../)
const cors = require('cors');
const {errors} = require('celebrate');

const app = express(); //cria a aplicação

app.use(cors());
app.use(express.json()); //no corpo da requisição que esta em json converter em JavaScript, se não ele não lerá dados em json
app.use(routes); //usar o arquivo de rotas
app.use(errors());


module.exports = app;