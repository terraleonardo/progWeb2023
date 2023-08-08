//Autor: Leonardo Terra dos Santos - 401 Info
const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/detalhe/:livro", (req, res) => {
    const titulos = {
        o_hobbit: "O Hobbit",
        jogos_vorazes: "Jogos Vorazes",
        guia_do_mochileiro: "O Guia do Mochileiro das Galáxias",
        dracula: "Drácula",
        eu_robo: "Eu, Robô",
        neuromancer: "Neuromancer"
    }
    const autores = {
        o_hobbit: "J.R.R. Tolkien",
        jogos_vorazes: "Suzanne Collins",
        guia_do_mochileiro: "Douglas Adams",
        dracula: "Bram Stoker",
        eu_robo: "Isaac Asimov",
        neuromancer: "William Gibson"
    }
    const descricoes = {
        o_hobbit: "Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. Essa jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, sejam eles, os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler e descobrir.",
        jogos_vorazes: "Constituída por uma suntuosa Capital cercada de 12 distritos periféricos, a nação de Panem se ergueu após a destruição dos Estados Unidos. Como represália por um levante contra a capital, a cada ano os distritos são forçados a enviar um menino e uma menina entre 12 e 18 anos para participar dos Jogos Vorazes. As regras são simples: os 24 tributos, como são chamados os jovens, são levados a uma gigantesca arena e devem lutar entre si até só restar um sobrevivente. O vitorioso, além da glória, leva grandes vantagens para o seu distrito.",
        guia_do_mochileiro: "Segundos antes de a Terra ser destruída para dar lugar a uma via expressa interespacial, Arthur Dent é salvo por Ford Prefect, um E.T. que fazia pesquisa de campo para a nova edição de O Guia do Mochileiro das Galáxias. Pegando carona numa nave alienígena, os dois dão início a uma alucinante viagem pelo tempo e pelo espaço.",
        dracula: "O jovem advogado inglês Jonathan Harker é enviado por seu patrão à Transilvânia, no leste da Europa, para atender um misterioso cliente. Ao chegar, descobre que seu anfitrião é, na realidade, um poderoso vampiro: o conde Drácula. Consegue então fugir para a Inglaterra. Lá, ao lado de sua noiva, Mina, e do Professor Van Helsing, Jonathan travará uma batalha de vida e morte contra o poder maligno de Drácula.",
        eu_robo: "Eu, Robô é um conjunto de nove contos que relatam a evolução dos autômatos através do tempo. É neste livro que são apresentadas as célebres Três Leis da Robótica: os princípios que regem o comportamento dos robôs e que mudaram definitivamente a percepção que se tem sobre eles na própria ciência. Eu, Robô inicia-se com uma entrevista com a Dra. Susan Calvin, uma psicóloga roboticista da U.S Robots & Mechanical. Ela é o fio condutor da obra, responsável por contar os relatos de seu trabalho e também da evolução dos autômatos. Algumas histórias são mais leves e emocionantes como Robbie, o robô baba, outras, como Razão, levam o leitor a refletir sobre religião e até sobre sua condição humana.",
        neuromancer: "Considerada a obra precursora do movimento cyberpunk e um clássico da ficção científica moderna, Neuromancer conta a história de Case, um cowboy do ciberespaço e hacker da matrix. Como punição por tentar enganar os patrões, seu sistema nervoso foi contaminado por uma toxina que o impede de entrar no mundo virtual. Agora, ele vaga pelos subúrbios de Tóquio, cometendo pequenos crimes para sobreviver, e acaba se envolvendo em uma jornada que mudará para sempre o mundo e a percepção da realidade."
    }
    const capas = {
        o_hobbit: "/img/o_hobbit.jpg",
        jogos_vorazes: "/img/jogos_vorazes.jpg",
        guia_do_mochileiro: "/img/guia_do_mochileiro.jpg",
        dracula: "/img/dracula.jpg",
        eu_robo: "/img/eu_robo.jpg",
        neuromancer: "/img/neuromancer.jpg"
    }

    const {livro} = req.params;
    const titulo = titulos[livro];
    const autor = autores[livro];
    const descricao = descricoes[livro];
    const capa = capas[livro];

    res.render("detalhe", {titulo, autor, descricao, capa});
});

app.listen(3000, () => {
    console.log("Server ligado na porta 3000.");
});