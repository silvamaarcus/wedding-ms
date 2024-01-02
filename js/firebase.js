// Firebase

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBy9zIImCbKCLlwQHTNSGzxRzZJSPGrodQ",
  authDomain: "lista-casamento-c0c93.firebaseapp.com",
  databaseURL: "https://wedding-ms.vercel.app/",
  projectId: "lista-casamento-c0c93",
  storageBucket: "lista-casamento-c0c93.appspot.com",
  appId: "1:419331238810:web:67c9df6ed34cd3e517a823",
  measurementId: "G-4CQY8VDNN9"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao nó do banco de dados onde você deseja armazenar os dados do formulário
var formResponsesRef = firebase.database().ref("respostasFormulario");

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter valores do formulário
    var nome = document.getElementById("nome").value;
    var quantidadeAdultos = document.getElementById("quantidade_adultos").value;
    var quantidadeCriancas = document.getElementById(
      "quantidade_criancas"
    ).value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    // Salvar os dados no banco de dados
    formResponsesRef.push({
      nome: nome,
      quantidadeAdultos: quantidadeAdultos,
      quantidadeCriancas: quantidadeCriancas,
      email: email,
      telefone: telefone,
    });

    // Limpar o formulário após o envio
    form.reset();
  });
});
