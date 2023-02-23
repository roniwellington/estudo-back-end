const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados)

const escola = "Alura";
let nomeMaiusculas = '';

for (let i = 0; i < escola.length; i++) {
    nomeMaiusculas += escola[i].toLocaleUpperCase();
    
}

console.log(nomeMaiusculas)

const nomeDoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura";

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto)