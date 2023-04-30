//loops

//while e do while

let x = Math.random();

while(x>0.5){
    console.log(x);
    x = Math.random();
}

//ou

let x1;
do{
    x1 = Math.random();
    console.log(x);
}while(x1>0.5)

// for

for(let i=0; i<10; i++){
    console.log(i);
}

//aliás, console.log() printa um valor no terminal
//math random é obvio o que faz skssks, gera um valor randomico dentro de [0, 1)

//----------------------------------------------------------------------------------------------------

//funcões

function func1(x, y=4){
    return x+y;
}

//podemos definir valores padrões para variaveis

func1(1) //retorna 1 + 4

//existem outras formas de declarar funções

//function(){

//}

// uma função sem nome é uma função anônima, e pode ser atribuida a uma variavel

const func2 = function(x, y){
    return x/y;
}

func2(4, 2) // retorna 4/2

//existe uma sintaxe que simplifica isso, que são as arrow functions

const func3 = () => {
    return 10;
}

//podemos refazer a função 2

const func4 = (x, y) => {
    return x/y;
}

// da pra simplificar mais

const func5 = (x, y) => x/y; // quando a função só tem uma linha, podemos colocar depois da seta
// e implicitamente já existe um return ali.

// quando tem um parametro só, podemos tirar o parenteses

const func6 = x => x/2;

// existem as immediately invoked function expression

(function (x){
    console.log(x);
})(10);

// essa função printa 10 no terminal
// é uma função anonima que já é chamada
// serve pra q? sla, nunca usei mas existe

//existem outros tipos de função, tem como fazer função construtora de objetos sem uma classe
// tem as funções geradores que retornam varios valores seguidamente, mas
//isso tudo não é útil pra gente eu acho, quem quiser saber me pergunta que eu falo como é
// ou procura no MDN, a doc do js