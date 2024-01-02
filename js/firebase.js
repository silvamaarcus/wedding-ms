// // Firebase

// // Configuração do Firebase
// var firebaseConfig = {
//   apiKey: "SUA_API_KEY",
//   authDomain: "SEU_DOMINIO.firebaseapp.com",
//   databaseURL: "https://SEU_DOMINIO.firebaseio.com",
//   projectId: "SEU_PROJETO_ID",
//   storageBucket: "SEU_DOMINIO.appspot.com",
//   messagingSenderId: "SEU_SENDER_ID",
//   appId: "SEU_APP_ID",
// };

// // Inicialização do Firebase
// firebase.initializeApp(firebaseConfig);

// // Referência ao nó do banco de dados onde você deseja armazenar os dados do formulário
// var formResponsesRef = firebase.database().ref("respostasFormulario");

// document.addEventListener("DOMContentLoaded", function () {
//   var form = document.querySelector("form");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Obter valores do formulário
//     var nome = document.getElementById("nome").value;
//     var quantidadeAdultos = document.getElementById("quantidade_adultos").value;
//     var quantidadeCriancas = document.getElementById(
//       "quantidade_criancas"
//     ).value;
//     var email = document.getElementById("email").value;
//     var telefone = document.getElementById("telefone").value;

//     // Salvar os dados no banco de dados
//     formResponsesRef.push({
//       nome: nome,
//       quantidadeAdultos: quantidadeAdultos,
//       quantidadeCriancas: quantidadeCriancas,
//       email: email,
//       telefone: telefone,
//     });

//     // Limpar o formulário após o envio
//     form.reset();
//   });
// });
