const express = require("express");
const server = express();

//importado Dependências do Node
//node index.js
//Visto criação/funcionamento das seguintes rotas


// Localhost:3000/teste
// server.get("/teste", (req, res) => {
//   return res.json({
//     curso: `Curso Node JS`,
//   });
// });
// server.listen(3000);


//Query Params = nome=Nodejs
//localhost:3000/teste?nome=JavaScript
// server.get("/teste", (req, res) => {
//   const nome = req.query.nome;

//   return res.json({
//     curso: `Aprendendo ${nome}`,
//   });
// });
// server.listen(3000);


//Route Params = /teste/2
//localhost:3000/teste/2
server.get("/teste:id", (req, res) => {
  const id = req.params.id;

  return res.json({
    curso: `Aprendendo ${id}`,
  });
});
server.listen(3000);
