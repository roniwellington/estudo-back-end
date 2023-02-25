// const livro = {
//     nome: "React Native",
//     editora: "Casa do Código",
//     paginas: 185,
//     anunciar: function(){
//         console.log("A alura indica o livro " + this.nome + "!")
//     }
// }

// livro.anunciar()

// const livro2 = function(nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const GraphQL = new livro2("GraphQL", "Casa do Código", 143)
// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())


//////////////////////
//classes
class Livro3 {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

//const NodeJS = new Livro3("Primeiros Passos com NodeJS", "Casa do Código", 195)

// NodeJS.anunciarTitulo()
// NodeJS.descreverTitulo()

class LivroColecao extends Livro3 {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()
