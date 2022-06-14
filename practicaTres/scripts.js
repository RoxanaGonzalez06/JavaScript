let variable = "Hola! soy tu cotizador de Caución"

let userName = prompt("Por favor ingresá tu nombre.")

let userAnswer
let userPick


function Caucion (vivienda, valorAlquiler, meses, tasa){
    this.vivienda = vivienda
    this.valorAlquiler = valorAlquiler
    this.meses = meses
    this.tasa = tasa
    this.iva = 1.21
}
    
const particular = new Caucion ("particular", "valorAlquiler", "meses", 1.85)
const comercial = new Caucion ("comercial", "valorAlquiler", "meses", 2.05)

let arrayCaucion = [particular, comercial]
console.log(arrayCaucion)

if (!userName){
    alert('No pusiste tu nombre')
} else{
    alert (`En hora buena ${userName} aquí podras cotizar tu seguro de Caución de alquiler`)
}

let userAge = parseInt (prompt ('Antes de comenzar: ¿Cuantos años tenes?'))
console.log (userAge)
if (userAge>18){
    alert ('Podes ingresar')
    do{
        userAnswer = prompt ('¿La caución es para una vivienda de uso particular o comercial?')
        valorAlquiler(arrayCaucion, userAnswer)
    } while (!userAnswer)

} else{
    alert ('Lo lamento! Por tu edad no podes continuar')
}

function calcular(alquiler, meses, tasa){
    console.log("Resultado:", ((alquiler*meses)*tasa)/1000)
    return (alquiler*meses)*tasa/1000
}

function valorAlquiler (arrayCaucion, userAnswer) {   
    let alquiler= prompt("Ingresá el costo mensual del alquiler")
    let meses= prompt("Ingresá el numero de meses de tu contrato de alquiler")
    console.log(arrayCaucion)
    if (userAnswer === arrayCaucion[0].vivienda) {
        alert(`El precio de su caucion de su vivienda ${arrayCaucion[0].vivienda} es: ${calcular (alquiler, meses, arrayCaucion[0].tasa)}`)
    } else if (userAnswer === arrayCaucion[1].vivienda) {
        alert(`El precio de su caucion de su vivienda ${arrayCaucion[1].vivienda} es: ${calcular (alquiler, meses, arrayCaucion[1].tasa)}`)
    }
}





