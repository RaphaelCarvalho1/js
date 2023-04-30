// tipos primitivos

10 //number
"oloco" // string
true && false // boleano
undefined // undefined
null // null

//----------------------------------------------------------------------------------------------------

// declaração de variáveis

dinheiro = 10; // variavel com escopo global
var dinheiro1 = 20 // variavel também com escopo global
let dinheiro2 = 30 // variavel com escopo local, delimitado por bloco
const dinheiro3 = 40 // constante, ou seja, variavel imutavel, e também com escopo delimitado por bloco

/*
if(true){
    const bloco = 10;
    let bloco1 = 12;
    var bloco2 = 11;
    bloco3 = 3;
}

nesse caso, apenas bloco2 e bloco3 são acessiveis fora do if

*/

// OBS: escopo de funções protegem todos os tipos de variaveis, uma var declarada dentro de uma função
// não pode ser acessada fora

// geralmente se usa let e const apenas, devido a essas questões de escopo, é uma boa prática

//dica: usem const sempre, e caso seja necessario q uma variavel mude com o tempo, troque para let


//----------------------------------------------------------------------------------------------------