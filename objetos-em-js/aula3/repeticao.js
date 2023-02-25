const cliente = {
    nome: "Joao",
    idade: 24,
    email: "Jao@firma.com",
    telefone: ["123456789", "123456789"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    }
];

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor  ${cliente[chave]}`);

    }
}