const express = require('express'); // Importa o módulo express neste arquivo
const app = express(); // Iniciando o Express

// Rota 1: Página Inicial com Formulário de Input
app.get('/', (req, res) => {
    res.send(`
      <html>
        <head><title>Página Inicial</title></head>
        <body>
          <h1>Bem-vindo(a)!</h1>
          <a href="/sobre">Ir para a página Sobre</a><br>
          <a href="/horario">Ir para a página Horario</a><br>
        </body>
      </html>
    `);
  });
  

  app.get('/sobre', (req, res) => {
    res.send(`
      <html>
        <head><title>Sobre</title></head>
        <body
          <h1>Apresentação</h1>
          <p>Esta página foi criada para a realização de uma apresentação, tmj</p>
          <a href="/">Voltar para a Página Inicial</a><br>
        </body>
      </html>
    `);
  });
  
  app.get('/horario', (req, res) => {
    // Obtendo a data e hora atuais
    const dataAtual = new Date();
    const horarioAtual = dataAtual.toLocaleTimeString();

    // Enviando a resposta HTML
    res.send(`<h1>O horário atual é: ${horarioAtual}</h1>`);
});

app.listen(3000, function(erro) { // Cria a aplicação na porta 3000
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
});