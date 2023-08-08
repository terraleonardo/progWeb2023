const connection = require('./db.js')
const Connection = require('./db.js')

connection.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Conectado com o BD.")
    }
})

//Criar a tabela animais
let sql = 'CREATE TABLE IF NOT EXISTS animais (_id int AUTO_INCREMENT, especie VARCHAR(64), idade int, porte VARCHAR(64), PRIMARY KEY(_id))'
connection.query(sql, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Tabela criada!")
    }
})

// //Inserir o primeiro animal
// let especie = 'Gato'
// let idade = 12
// let porte = 'pequeno'

// sql = 'INSERT INTO animais (especie, idade, porte) VALUES ('+connection.escape(especie)+', '+connection.escape(idade)+', '+connection.escape(porte)+')'
// connection.query(sql, (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("Animal gravado!")
//     }
// })

//Inserir outro animal (como objeto) (mesmo de cima com método diferente)
let animal = {
    especie: 'Pato',
    idade: '3',
    porte: 'pequeno'
}
sql = 'INSERT INTO animais SET ?'
connection.query(sql, animal, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Animal gravado!")
    }
})

    // const animal1 = new Animal({
    //     especie: 'Gato',
    //     idade: '12',
    //     porte: 'pequeno'
    // })
    
    // const animal2 = new Animal({
    //     especie: 'Cachorro',
    //     idade: '7',
    //     porte: 'grande'
    // })

    // const animal3 = new Animal({
    //     especie: 'Pato',
    //     idade: '3',
    //     porte: 'pequeno'
    // })

    // Animal.insertMany([animal1, animal2, animal3])
    //     .then(res => console.log(res))
    //     .catch(e => console.log(e))