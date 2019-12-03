/* var nome = "Felipe";
var idade = 26;
var idade2 = 10;
var frase = "Japão é bom";
var n1 = 3;
var n2 = 5;

//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

console.log(idade2);
//console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(n1*n2); */

/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop("");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - ")); */

/*
var fruta = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]

console.log(fruta);
alert(fruta[1].nome); */

/*
var idade = prompt("Qual a sua idade?");

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}  */

/*
var count = 0;

while (count <= 5) {
    console.log(count);
    count++;
} */

/*
var count;

for (count = 1; count <= 5; count++ ){
    alert(count);
} */

/*
var d = new Date();
alert(d.getDay()); */

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar;

function ValidaIdade(idade){
    validar;

    if (idade >= 18){
        validar = true
    } else {
        validar = false
    } 
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(ValidaIdade(idade));
*/
// alert(soma(5,10));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";

    //alert("Obrigado por clicar!");
}

function redirecionar(){
    //window.open("https://www.google.com");
    window.location.href ="https://www.google.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";    
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}