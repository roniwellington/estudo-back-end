const cliente = {
    nome: "Joao",
    idade: 24,
    email: "Jao@firma.com",
    telefone: ["123456789", "987654321"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    }
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial} Comercial`)
    console.log(`Ligando para ${telefoneResidencial} Residencial`)
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
   ...cliente.enderecos[0],
}

console.log(encomenda);