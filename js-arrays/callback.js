const nomes = ['Evaldo', 'Mari', 'Camis'];
// função forEach
// nomes.forEach(function (nome){
//     console.log(nome)
// });

//função arrowfunction
// nomes.forEach((nome) => {
//     console.log(nome)
// });

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);


