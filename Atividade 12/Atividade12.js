alert("FUNÇÃO 1\n\nRetângulo");

function Retangulo(x, y) {
  this.x = x;
  this.y = y;

  this.calculaArea = function () {
    return this.x * this.y;
  };
}

var x = parseInt(prompt("Digite o tamanho da base:"));
var y = parseInt(prompt("Digite o tamanho da altura:"));

var objRet = new Retangulo(x, y);

alert("Área = " + objRet.calculaArea());

alert("FUNÇÃO 2\n\nConta");

function Conta() {
  var nome;
  var banco;
  var numConta;
  var saldo;

  this.setNome = function (nome) {
    this.nome = nome;
  };
  this.getNome = function () {
    return this.nome;
  };
  this.setBanco = function (banco) {
    this.banco = banco;
  };
  this.getBanco = function () {
    return this.banco;
  };
  this.setNumConta = function (numConta) {
    this.numConta = numConta;
  };
  this.getNumConta = function () {
    return this.numConta;
  };
  this.setSaldo = function (saldo) {
    this.saldo = saldo;
  };
  this.getSaldo = function () {
    return this.saldo;
  };
}

function Corrente() {
  var saldoEspec;

  this.setSaldoEspec = function (saldoEspec) {
    this.saldoEspec = saldoEspec;
  };
  this.getSaldoEspec = function () {
    return this.saldoEspec;
  };
}

function Poupanca() {
  var juros;
  var dataVenc;

  this.setJuros = function (juros) {
    this.juros = juros;
  };
  this.getJuros = function () {
    return this.juros;
  };
  this.setDataVenc = function (dataVenc) {
    this.dataVenc = dataVenc;
  };
  this.getDataVenc = function () {
    return this.dataVenc;
  };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var objCorre = new Corrente();
var objPoup = new Poupanca();

alert("Conta Corrente");
var nome = prompt("Digite o nome do correntista:");
objCorre.setNome(nome);
var banco = prompt("Digite o nome do banco:");
objCorre.setBanco(banco);
var numConta = parseInt(prompt("Digite o número da conta:"));
objCorre.setNumConta(numConta);
var saldo = parseInt(prompt("Digite o saldo:"));
objCorre.setSaldo(saldo);
var saldoEspec = parseFloat(prompt("Digite o saldo especial:"));
objCorre.setSaldoEspec(saldoEspec);

alert("Conta Poupança");
var nome = prompt("Digite o nome do correntista:");
objPoup.setNome(nome);
var banco = prompt("Digite o nome do banco:");
objPoup.setBanco(banco);
var numConta = parseInt(prompt("Digite o número da conta:"));
objPoup.setNumConta(numConta);
var saldo = parseInt(prompt("Digite o saldo:"));
objPoup.setSaldo(saldo);
var juros = parseInt(prompt("Digite o juros:"));
objPoup.setJuros(juros);
var dataVenc = prompt("Digite a data de vencimento:");
objPoup.setDataVenc(dataVenc);

alert(
  "Dados da Conta Corrente\nNome do correntista: " +
    objCorre.getNome() +
    "\nBanco: " +
    objCorre.getBanco() +
    "\nNúmero da Conta: " +
    objCorre.getNumConta() +
    "\nSaldo: " +
    objCorre.getSaldo() +
    "\nSaldo Especial: " +
    objCorre.getSaldoEspec()
);
alert(
  "Dados da Conta Corrente\nNome do correntista: " +
    objPoup.getNome() +
    "\nBanco: " +
    objPoup.getBanco() +
    "\nNúmero da Conta: " +
    objPoup.getNumConta() +
    "\nSaldo: " +
    objPoup.getSaldo() +
    "\nJuros: " +
    objPoup.getJuros() +
    "\nData de Vencimento: " +
    objPoup.getDataVenc()
);
