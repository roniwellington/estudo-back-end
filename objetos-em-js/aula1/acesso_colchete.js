const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})

// console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]}`);

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)