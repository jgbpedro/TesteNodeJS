import express from 'express'; // Importando o Express
import bodyParser from 'body-parser'; // Importanto Body Parse - Para requisicoes form-enconded
import mongoose from 'mongoose'; // Importando o mongoose - Para manipular os dados e objetos do mongodb
import cors from 'cors';
import routes from './routes/routes'; // Importando as rotas da API

// Carregar env
require('dotenv').config();

// Inicializando o app
const app = express();

// Configurando body-parser para manipular requisicoes
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json(),
);

// Criando a conexao via mogoose.
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true });

// Definindo a porta do servidor
const port = process.env.PORT || 3000;

app.use(cors());

// Config. caminho para salvar as imagens
app.use('/public', express.static('public'));

// Definindo o path API para acessar as rotas
app.use('/api', routes);

// Iniciar app para responder para a porta
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Porta: ${port}`);
});
