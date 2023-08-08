//Leonardo Terra dos Santos - 401 Info
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo ao meu exercício!")
});

app.get("/nome/:nome", (req, res) => {
    res.send("Bem vindo(a) "+req.params.nome+"!");
});

app.get("/repetir/:v1/:v2", (req, res) => {
    for(var i = 0; i < req.params.v2; i++) {
        res.write(req.params.v1+" ");
    }
    res.end();
});

app.get("/som/:animal", (req, res) => {
    if(req.params.animal == "cao") {
        res.send("O cachorro faz 'Auuu Auuu Auuu'.")
    }
    else if(req.params.animal == "gato") {
        res.send("O gato faz 'Miauuu'.")
    }
    else if(req.params.animal == "vaca") {
        res.send("A vaca faz 'Mooon'.")
    }
    else if(req.params.animal == "ovelha") {
        res.send("A ovelha faz 'Meeeee'.")
    }
    else if(req.params.animal == "cavalo") {
        res.send("O cavalo faz 'Rhiiiii'.")
    }

    else res.send("Animal desconhecido");
});

app.get("/rep", (req, res) => {
    const { p, q } = req.query;
    for(var i = 0; i < `${q}`; i++) {
        res.write(`${p}`+" ");
    }
    res.end();
});

app.get("*", (req, res) => {
    res.send("Página não encontrada!")
});


app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000");
});