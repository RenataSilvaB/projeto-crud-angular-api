import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

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

app.post('/tarefas', (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: req.body.titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);

  const tarefa = tarefas.find(tarefa => tarefa.id === id);

  if (!tarefa) {
    return res.status(404).json({
      mensagem: 'Tarefa não encontrada'
    });
  }

  tarefa.titulo = req.body.titulo;

  res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);

  const indice = tarefas.findIndex(tarefa => tarefa.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: 'Tarefa não encontrada'
    });
  }

  const tarefaRemovida = tarefas.splice(indice, 1);

  res.json(tarefaRemovida[0]);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});