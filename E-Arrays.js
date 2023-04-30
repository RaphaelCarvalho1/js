// Arrays

const array = [10, 20, "pão", null, , false];

// arrays em js funcionam como arraylist, são listas que são implementadas através de arrays
// se não me engano :P

// podemos acessar igual gente normal

array[2] // retorna "pão"

// além disso, como vocês podem ver, não tem restrição de tipo, e ainda pode ter espaço vazio

array.push(10) // adiciona alguém na ultima posição
array.pop() // remove alguém da ultima posição
array.unshift() // adiciona alguém na primeira posição
array.shift() // remove alguém do começo

// existem varias outras funções uteis para arrays, quem quiser saber de alguma especifica pode 
// me perguntar ou olhar a MDN

//----------------------------------------------------------------------------------------------------

// loops em arrays

//for in

for (let key in array){
    console.log(key)
}

// no for in, key assume os valores das chaves
// no caso desse array, ele vai assumir 0, 1, 2, 3, 4, 5, um desses a cada iteração

// no caso de um map (ou dicionario) ele assume os valores das chaves de um map
// se não me engano, for in funciona pra objetos tbm

//for of

for (let val of array){
    console.log(val)
}

// aqui, val vai assumir cada valor do array, ou seja 10, 20, "pão", null, undefined, false
// um desses a cada iteração
// é muito parecido com o for each do java

// for each

// falando nele ksksks, for each aqui é um metodo de arrays que recebe uma função

array.forEach((val, index, array)=>{
    // aqui essa função pode receber os valores e fazer alguma programação
    // também recebe os indices ou o array inteiro
})

// não retorna valor nenhum

// existem outras funções para iterar sobre arrays de um modo especifico,
// filter, map e reduce. Quem quiser saber como que é, me procura ou vê na MDN
