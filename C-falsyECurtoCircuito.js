// valores falsy

//qualquer tipo de valor pode ser colocado numa expressão booleana

[undefined, null, 0, "", NaN] // esses são os chamados valores falsy, eles são avaliados como falso
// qualquer outro valor é verdadeiro

!1 // isso dá false
!0 //isso dá true

//----------------------------------------------------------------------------------------------------

//Operações de curto circuito

// em uma expressão E

true && true && false && true && false

// o JS para no primeiro falso, porque se tiver um falso, o && é falso se alguma variavel for falsa
// além disso, esse falso é retornado pela expressão

// em uma expressão OU

false || false || true

// o JS para no primeiro true, porque se tiver um true, o || é true se alguma variavel for verdadeira
// além disso, esse true é retornado pela expressão

// se combinamos isso com o falsy, temos

const val = undefined || undefined || "10" // essa variavel está guardando o valor "10"
// pois foi o primeiro valor verdadeiro encontrado pela expressão

// isso é usado em caso de ter que chegar se uma entrada é nula

const val1 =  Math.random() || 1; // se a função retornar o 0, então guarda o 1. Assim garantimos que não
// guardará o 0

//----------------------------------------------------------------------------------------------------


