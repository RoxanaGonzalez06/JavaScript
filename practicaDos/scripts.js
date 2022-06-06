let variable = "Hola! soy tu cotizador de Caución"
console.log (variable)

let userName = prompt ("Por favor ingresá tu nombre.")
let userAnswer
let userPick
let particular = 'particular' 
let comercial = 'comercial'
const tasa = 1.85

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
        console.log (`El cliente dijo: ${userAnswer}, pero en lowercase es ${userAnswer.toLowerCase()}`)
        switch (userAnswer.toLowerCase ()) {
            case 'particular':
                userPick = particular
                break;
            case 'comercial':
                userPick = comercial
                break;  
            default:
                alert ('¡Por favor ingresa particular o comercial!')
                break;
        }

        valorAlquiler()
    } while (!userAnswer)

} else{
    alert ('Lo lamento! Por tu edad no podes continuar')
}
console.log(`Tu selección de tipo de alquiler es: ${userPick}`)

function calcular(alquiler, meses, tasa){
    console.log("Resultado:", ((alquiler*meses)*tasa)/1000)
}

function valorAlquiler () {
   
    let alquiler= prompt("Ingresá el costo mensual del alquiler")
    let meses= prompt("Ingresá el numero de meses de tu contrato de alquiler")
        calcular (alquiler, meses, tasa)
}



