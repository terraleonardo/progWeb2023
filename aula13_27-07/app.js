const express = require("express");
const app = express();
const methodOverride = require("method-override");
const connection = require('./db.js')

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

connection.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Conectado com o BD!")
    }
})

app.get("/", (req, res) => {
    res.redirect("/animais");
});

app.get("/animais", (req, res) => {
    const sql = 'SELECT * FROM animais'
    connection.query(sql, (err, animais) => {
        if(err) {
            console.log(err)
        } else {
            res.render('index', {animais})
        }
    })
});

app.get("/animais/new", (req, res) => {
    res.render("new");
});

app.post('/animais', (req, res) => {
    sql = 'INSERT INTO ANIMAIS SET ?'
    connection.query(sql, req.body, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Animal gravado!")
        }
    })
    res.redirect('/animais')
})

app.post("/animais", async (req, res) => {
    const {especie, idade, porte} = req.body;
    const novoAnimal = new Animal({especie, idade, porte})
    await novoAnimal.save()
    res.redirect("/animais")
});

app.get("/animais/:id", (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM animais WHERE _id = '+connection.escape(id)
    connection.query(sql, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.render('show', {animal: result[0]})
        }
    })
});

//segunda forma



app.get("/animais/:id/edit", (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM animais WHERE _id = ?'
    connection.query(sql, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.render('edit', {animal: result[0]})
        }
    })
    res.render("edit", {animal})
});

app.patch("/animais/:id", (req, res) => {
    const {id} = req.params;
    const sql = "UPDATE animais SET ? WHERE _id = ?"
    connection.query(sql, [req.body, id], (err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/animais/" + id)
        }
    })
})

app.delete("/animais/:id", async (req, res) => {
    const {id} = req.params;
    await Animal.findByIdAndDelete(id)
    res.redirect("/animais");
});

app.listen(3000, () => {
    console.log("Server ligado na porta 3000.")
});