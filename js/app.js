// Menu Hamburguer
const bx = document.querySelector(".bx");
const menu_mobile = document.querySelector(".menu-mobile");
const link_mobile = document.querySelectorAll(".link-menu-mobile");

bx.addEventListener("click", () => {
  bx.classList.toggle("active");
  menu_mobile.classList.toggle("showmenu");
});

// criando um laço de tarefas para todos os links
link_mobile.forEach((item) => {
  item.addEventListener("click", () => {
    menu_mobile.classList.remove("showmenu");
    bx.classList.toggle("active");
  });
});

// Contador
let dataFornecida = new Date("2024-09-06T23:59:59"); // Data desejada
let dataAtual = new Date();

// Convertendo em Data em segundos.
let diferencaEmSegundos = Math.floor((dataFornecida - dataAtual) / 1000);

let tempoTotal = diferencaEmSegundos;
let temporizador;

function atualizarTemporizador() {
  const dias = Math.floor(tempoTotal / (60 * 60 * 24));
  const horas = Math.floor((tempoTotal % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((tempoTotal % (60 * 60)) / 60);
  const segundos = tempoTotal % 60;

  document.querySelector(".dias").innerText = padZero(dias);
  document.querySelector(".horas").innerText = padZero(horas);
  document.querySelector(".minutos").innerText = padZero(minutos);
  document.querySelector(".segundos").innerText = padZero(segundos);
}

// Função para verificar se o número possui 0 a esquerda. Se ñ tiver, vai colocar.
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

function iniciarTemporizador() {
  temporizador = setInterval(function () {
    if (tempoTotal > 0) {
      tempoTotal--;
      atualizarTemporizador();
    } else {
      pararTemporizador();
      alert("Tempo esgotado!");
    }
  }, 1000); // atualiza a cada 1 segundo (1000 milissegundos)
}

function pararTemporizador() {
  clearInterval(temporizador);
}

// Chame a função de atualização inicial para exibir o tempo inicial
atualizarTemporizador();

// Inicie o temporizador automaticamente
iniciarTemporizador();

// Validação de formulário.
function configurarFormulario() {
  let form = document.querySelector("form");
  let nomeContainer = document.querySelector(".flex-start-row"); // Container do campo de nome
  let campoNomeConvidado = null;

  form.addEventListener("change", function (event) {
    let quantidadeAdultos = document.getElementById("quantidade_adultos").value;

    // Verifica se a opção selecionada é "2"
    if (quantidadeAdultos == 2 && !campoNomeConvidado) {
      // Adiciona dinamicamente um segundo campo de nome apenas se não existir
      campoNomeConvidado = document.createElement("div");
      campoNomeConvidado.classList.add("flex-start-row");

      let label = document.createElement("label");
      label.setAttribute("for", "nome2");
      label.classList.add("p1", "w-50", "mt-2");
      label.textContent = "Convidado: ";

      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", "nome2");
      input.setAttribute("name", "nome2");
      input.setAttribute("placeholder", "Nome do convidado");
      input.setAttribute("required", "");
      input.classList.add("mt-2");

      campoNomeConvidado.appendChild(label);
      campoNomeConvidado.appendChild(input);

      // Insere o novo campo após o primeiro campo de nome
      nomeContainer.parentNode.insertBefore(
        campoNomeConvidado,
        nomeContainer.nextSibling
      );
    } else if (campoNomeConvidado && quantidadeAdultos != 2) {
      // Remove o campo de nome do convidado se a opção for diferente de "2"
      campoNomeConvidado.parentNode.removeChild(campoNomeConvidado);
      campoNomeConvidado = null;
    }
  });

  form.addEventListener("submit", function (event) {
    let form = document.querySelector("form");
    console.log("apertou botao");

    form.addEventListener("submit", function (event) {
      alert("Obrigado por confirmar sua presença!");

      let nome = document.getElementById("nome").value;
      let quantidadeAdultos =
        document.getElementById("quantidade_adultos").value;
      let quantidadeCriancas = document.getElementById(
        "quantidade_criancas"
      ).value;
      let email = document.getElementById("email").value;
      let telefone = document.getElementById("telefone").value;

      // Validar o nome (não vazio)
      if (nome.trim() === "") {
        alert('Por favor, preencha o campo "Nome Completo".');
        event.preventDefault();
        return;
      }

      // Validar a quantidade de adultos (pelo menos 1)
      if (quantidadeAdultos < 1) {
        alert("Por favor, selecione uma quantidade válida de adultos.");
        event.preventDefault();
        return;
      }

      // Validar o email
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        event.preventDefault();
        return;
      }

      // Validar o telefone
      let telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      if (!telefoneRegex.test(telefone)) {
        alert(
          "Por favor, insira um número de telefone válido (formato: (00) 00000-0000)."
        );
        event.preventDefault();
        return;
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", configurarFormulario);

// Mensagem de confirmação de presença.
const alert_sucesso = document.getElementById("sucesso");
alert_sucesso.addEventListener("click", () => {
  alert("Obrigado por confirmar sua presença!");
});

// Contador de visitas no site

// Verifica se já existe um contador de visitas no localStorage
if (localStorage.getItem("visitCount")) {
  // Se existir, recupera e incrementa
  var count = parseInt(localStorage.getItem("visitCount")) + 1;
  localStorage.setItem("visitCount", count);
} else {
  // Se não existir, inicializa com 1
  localStorage.setItem("visitCount", 1);
}

// Exibe o contador no console
console.log(
  "Esta página foi visitada " + localStorage.getItem("visitCount") + " vezes."
);

// Forçar play no video da intro
document.addEventListener("DOMContentLoaded", function () {
  var meuVideo = document.getElementById("video_intro");
  meuVideo.play();
});
