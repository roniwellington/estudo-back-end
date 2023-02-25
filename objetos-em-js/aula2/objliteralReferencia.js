//referencia

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

//    const objPersonagem2 = objPersonagem;
//    objPersonagem2.nome = "Gandalf, o Cinzento"

//    console.log(objPersonagem.nome);
//    console.log(objPersonagem2.nome);


   //acesso por cópia
   let num = 50;
   let num2 = num;

   num2 = 100
   console.log(num)
   console.log(num2)

   const objPersonagem3 = Object.create(objPersonagem)
   objPersonagem3.nome = "Gandalf , o Cinzento"

   console.log(objPersonagem.nome)
   console.log(objPersonagem3.nome)