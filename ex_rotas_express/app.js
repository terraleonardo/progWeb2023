const express = require("express");
const app = express();

app.get("/", (req, res) => { //definindo uma resposta para cada rota 
    res.send("Salut!");
});

app.get("/tchau", (req, res) => {
    res.send("Au revoir!");
});

app.get("/obrigado", (req, res) => {
    res.send("<h1>Merci!</h1>");
});


//:path_variable
app.get("/aluno/:nome", (req, res) => {
    res.send("Você está buscando as informações do aluno: "+req.params.nome)
});

app.get("/:v1/:v2", (req, res) => { //exemplo com duas variáveis
    res.send("Você digitou: "+req.params.v1+" e "+req.params.v2+".")
});


app.get("*", (req, res) => { // * = se não encontrar nenhum caminho
    res.send("C'est rien!")
});


app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000");
});