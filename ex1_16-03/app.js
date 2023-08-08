//Leonardo Terra dos Santos - 401 Info
const casual = require("casual").pt_BR;

casual.define('cep', function() {
    return Math.random().toString().slice(2,10);
});

for(var i = 0; i < 10; i++) {
    console.log("Nome e sobrenome: "+casual.full_name+" "+casual.last_name);
    console.log("Rua: "+casual.street);
    console.log("Cidade: "+casual.city);
    console.log("País: "+casual.country);
    console.log("CEP: "+casual.cep+"\n");
}