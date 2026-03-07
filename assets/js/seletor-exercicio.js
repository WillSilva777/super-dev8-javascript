// "ArrayList" do JavaScript: um array de objetos
const clientes = [];

const CHAVE_STORAGE = "clientes_cadastrados";

function salvarClientes() {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(clientes));
}

function carregarClientes() {
  const dados = localStorage.getItem(CHAVE_STORAGE);

  if (dados) {
    const lista = JSON.parse(dados);
    clientes.length = 0;
    lista.forEach(c => clientes.push(c));
  }
}

// ✅ ALTERADO: chama aqui (ok) depois de definir tudo
carregarClientes();

const radios = document.querySelectorAll('input[name="tipoPessoa"]');
const pf = document.getElementById("tipo-pf");
const pj = document.getElementById("tipo-pj");

const nome = document.getElementById("nome");

// PF
const cpf = document.getElementById("cpf");
const rg = document.getElementById("rg");
const dataNascimento = document.getElementById("dataNascimento");

// PJ
const cnpj = document.getElementById("cnpj");
const razaoSocial = document.getElementById("razaoSocial");

const btnRegistrar = document.getElementById("btnRegistrar");

// ✅ ALTERADO: só pega saida se existir (se você removeu do HTML)
const saida = document.getElementById("saida");

function esconderTudo() {
  pf.classList.add("hidden");
  pj.classList.add("hidden");
}

function atualizarTela() {
  const selecionado = document.querySelector('input[name="tipoPessoa"]:checked');

  if (!selecionado) {
    esconderTudo();
    return;
  }

  if (selecionado.value === "pf") {
    pf.classList.remove("hidden");
    pj.classList.add("hidden");
  } else {
    pj.classList.remove("hidden");
    pf.classList.add("hidden");
  }
}

// começa sem nada marcado e sem campos
radios.forEach(r => r.checked = false);
esconderTudo();
radios.forEach(r => r.addEventListener("change", atualizarTela));

// ✅ ALTERADO: só atualiza se saida existir
function atualizarSaida() {
  if (saida) {
    saida.textContent = JSON.stringify(clientes, null, 2);
  }
}

// Se você ainda usa a saida, já carrega o que veio do localStorage
atualizarSaida(); // ✅ ALTERADO

// ====== MÁSCARAS (pontuação) ======
function somenteNumeros(valor) {
  return valor.replace(/\D/g, "");
}

function mascaraCPF(valor) {
  valor = somenteNumeros(valor).slice(0, 11);
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return valor;
}

function mascaraCNPJ(valor) {
  valor = somenteNumeros(valor).slice(0, 14);
  valor = valor.replace(/(\d{2})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1/$2");
  valor = valor.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  return valor;
}

// RG no formato: 4.771.938
function mascaraRG(valor) {
  valor = somenteNumeros(valor).slice(0, 7);
  valor = valor.replace(/(\d{1})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  return valor;
}

// aplica máscaras
cpf.addEventListener("input", (e) => e.target.value = mascaraCPF(e.target.value));
rg.addEventListener("input", (e) => e.target.value = mascaraRG(e.target.value));
cnpj.addEventListener("input", (e) => e.target.value = mascaraCNPJ(e.target.value));

// ====== VALIDAÇÃO (tamanho do formato) ======
function validarCPFFormatado(valor) { return valor.length === 14; }
function validarRGFormatado(valor) { return valor.length === 9; } // "4.771.938"
function validarCNPJFormatado(valor) { return valor.length === 18; }

btnRegistrar.addEventListener("click", () => {
  const selecionado = document.querySelector('input[name="tipoPessoa"]:checked');

  if (!nome.value.trim()) {
    alert("Preencha o nome.");
    return;
  }

  if (!selecionado) {
    alert("Selecione Pessoa Física ou Pessoa Jurídica.");
    return;
  }

  const tipo = selecionado.value;

  if (tipo === "pf") {
    if (!validarCPFFormatado(cpf.value)) {
      alert("CPF inválido. Use o formato 000.000.000-00");
      return;
    }
    if (!validarRGFormatado(rg.value)) {
      // ✅ ALTERADO: mensagem do RG no formato que você quer
      alert("RG inválido. Use o formato 0.000.000 (ex: 4.771.938)");
      return;
    }
    if (!dataNascimento.value) {
      alert("Preencha a Data de Nascimento.");
      return;
    }
  } else {
    if (!validarCNPJFormatado(cnpj.value)) {
      alert("CNPJ inválido. Use o formato 00.000.000/0000-00");
      return;
    }
    if (!razaoSocial.value.trim()) {
      alert("Preencha a Razão Social.");
      return;
    }
  }

  const cliente = {
    nome: nome.value.trim(),
    tipo: tipo.toUpperCase()
  };

  if (tipo === "pf") {
    cliente.cpf = cpf.value.trim();
    cliente.rg = rg.value.trim();
    cliente.dataNascimento = dataNascimento.value;
  } else {
    cliente.cnpj = cnpj.value.trim();
    cliente.razaoSocial = razaoSocial.value.trim();
  }

  clientes.push(cliente);

  salvarClientes();    // ✅ ALTERADO: AGORA SALVA NO NAVEGADOR
  atualizarSaida();    // ✅ ALTERADO: atualiza a saída se existir

  // limpar
  nome.value = "";
  cpf.value = "";
  rg.value = "";
  dataNascimento.value = "";
  cnpj.value = "";
  razaoSocial.value = "";
  radios.forEach(r => r.checked = false);
  esconderTudo();
});

// ✅ ALTERADO: não quebrar se o botão não existir no HTML
const btnVerCadastrados = document.getElementById("btnVerCadastrados");

if (btnVerCadastrados) {
  btnVerCadastrados.addEventListener("click", () => {
    if (clientes.length === 0) {
      alert("Nenhum cadastro ainda.");
      return;
    }

    const texto = clientes.map((c, i) => {
      if (c.tipo === "PF") {
        return (
          `${i + 1}) PF\n` +
          `Nome: ${c.nome}\n` +
          `CPF: ${c.cpf}\n` +
          `RG: ${c.rg}\n` +
          `Nascimento: ${c.dataNascimento}\n`
        );
      } else {
        return (
          `${i + 1}) PJ\n` +
          `Nome: ${c.nome}\n` +
          `CNPJ: ${c.cnpj}\n` +
          `Razão Social: ${c.razaoSocial}\n`
        );
      }
    }).join("\n----------------------\n");

    alert(texto);
  });
}