const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    Query params: Parametros nomeados enviados na rota após o "?" (filtros,paginação)
    Route params: Parametros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos (envio de informações)
*/


app.listen(3333);