let numero = prompt("Ingrese un numero")
let numeroParseado = parseInt(numero)
for (let i = numeroParseado; i <= 50; i++){
    console.log(i)
}

let texto = ""
let textoConcatenado =""

while (texto != "ESC") {
    texto = prompt("Ingrese un texto")
    textoConcatenado = textoConcatenado+texto
    console.log(textoConcatenado)
}


let repeticiones = prompt("Ingrese la cantidad de veces que se repetira el mensaje")
let repParseada = parseInt(repeticiones)
for (let ii = 1; ii <= repParseada; ii++) {
    console.log("hola"+ii)
}









