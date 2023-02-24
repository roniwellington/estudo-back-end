const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   //console.log(objPersonagem);
   //delete objPersonagem.aliado
   delete objPersonagem["endereco"]

   console.log(objPersonagem);