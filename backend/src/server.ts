import express from 'express';

const app = express();

const tarefas = [
  {
    id: 1,
    titulo: 'Estudar Angular',
    concluida: false
  },
  {
    id: 2,
    titulo: 'Aprender API',
    concluida: false
  }
];

app.get('/', (req, res) => {
  res.send('Minha primeira API está funcionando!');
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});