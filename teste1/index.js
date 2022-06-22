const express = require("express");
const server = express();

server.use(express.json());
const cursos = ["Node Js", "Java Script", "React Native"];
server.use((req, res, next)=>{
  console.log(`Url Chamada: ${req.url}`);
  return next();
});


//Funções
//--------------------------------------
function checkCurso(req, res, next){
  if(!req.body.name){
    return res.status(400).json({error: "Nome do Curso Obrigatório"});
  }
  return next();
}

function checkIndexCurso(req, res, next){
  const curso = cursos[req.params.index];
  if(!curso){
    return res.status(400).json({error: "O Curso não existe"});
  }
  req.curso = curso;
  return next();
}
//--------------------------------------


//Chamada todos os cursos
server.get('/cursos', (req, res)=>{
  return res.json(cursos);
});

//Chamada curso especifico
server.get("/cursos/:index", checkIndexCurso, (req, res) => {
  return res.json(req.curso);
});

//Criando novo curso
server.post('/cursos', checkCurso, (req, res)=>{
  const {name} = req.body;
  cursos.push(name);
  return res.json(cursos);
});

//Editando Curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res)=>{
  const {index} = req.params;
  const {name} = req.body;
  cursos[index] = name;
  return res.json(cursos);

});

//Deletando Curso
server.delete('/cursos/:index', checkIndexCurso, (req, res)=>{
  const {index} = req.params;
  cursos.splice(index, 1);
  return res.json({message: "Curso deletado com sucesso"});
})


//Debuger automatico com 'nodemon index.js' OU 'yarn dev'
server.listen(3000);


