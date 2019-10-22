
//=============================================
// 1) Introdução ao JavaScript 
//=============================================


// Comentaŕio 1 linha

/*   Comentário 
     em 
     Bloco
*/


nome = "Homer Simpson";
idade = 48;
idade2 = "padaria";

alert("Bem vindo " + nome);

alert(nome + " tem " + idade + " anos.");

alert(idade + idade2);

console.log(nome);
console.log(idade);

frase = "Inter é o melhor time do mundo !";
console.log(frase);

console.log(frase.replace("Madureira","Inter"));

console.log(frase.toLowerCase());

n1 = 5;
n2 = 3;
console.log(n1 * idade33);


lista = ["banana", "morango", "laranja"];

console.log(lista[2]);

console.log(lista);

alert(lista[1]);

lista.push("uva");

console.log(lista);

lista = ["banana", "morango", "laranja"];

console.log(lista);

lista.push("uva");

lista.pop();

console.log(lista);


lista.pop();

console.log(lista);

console.log(lista.toString()[0]);

console.log(lista.join("*"));

var fruta = {nome:"maçã", cor:"vermelha"}

console.log(fruta);

console.log(fruta.nome)

alert(fruta.cor);


var frutas = [ {nome:"maçã", cor:"vermelha"},
             {nome:"uva", cor:"roxa"} ]

alert(frutas[1].nome);    



var idade = prompt("Digite a sua idade:");

if (idade >= 18) {
   alert("Maior de idade.");
}
else {
   alert("Menor!");
};



var count = 0;

while (count <= 5) {
   console.log(count);
   // count = count + 1;
   count++;
};



var count;

for (count = 0; count <= 5; count++) {
   alert(count);
}


var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getMonth()+1);
alert(d);


//=============================================
// 2) Desenvolva Páginas Web com JavaScript 
//=============================================


function soma(n1, n2) {
   return ( n1 + n2) ;


alert(soma(5,3));



function setReplace (frase, nome, novo_nome) {
   return frase.replace(nome, novo_nome)
}

alert(setReplace("Vou para Holanda", "Holanda", "Estônia"));


function validaIdade(idade) {
   
   var conferido;
   
   if (idade >= 18) {
       conferido = true
   }
   else {
       conferido = false
   }
   return conferido;
}

var idade = prompt("Qual é a sua idade ?");


console.log(validaIdade(idade));


function botao() {
   alert("Obrigado por Clicar");
}

function clicou() {
   document.getElementById("agradecimento").innerHTML = "<strong>Obrigado pelo Clique</strong>";
   //console.log(document.getElementById("agradecimento"));
}

function redir() {
   window.open("https://g1.globo.com");
}


function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
};

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
};

  OU  


function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
};

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
};


function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}













