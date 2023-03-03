const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Bem vindo ao meu servidor!')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`)
})

app.post('/dados', (req, res) => {
  const dados = req.body;
  // Salvar os dados recebidos no banco de dados
  res.status(200).send('Dados salvos com sucesso!');
});