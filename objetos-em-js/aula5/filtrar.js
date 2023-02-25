const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(cleintes){
    return clientes.filter((cliente) => {
        return ( 
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);