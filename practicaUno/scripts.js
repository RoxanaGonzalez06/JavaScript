let variable = "Hola amigo/a"
console.log (variable)

let userName = prompt ("Por favor ingresá tu nombre.")
let userAnswer
let userPick
let wine = '🍷' 
let beer = '🍻'
let champagne = '🍾'
let softDrink = '🥤'
let water = '🚰'

if (!userName){
    alert('No pusiste tu nombre')
} else{
    alert (`En hora buena ${userName} ¿Querés vivir una nueva experiencia?`)
}
let userAge = parseInt (prompt ('Antes de comenzar: ¿Cuantos años tenes?'))
console.log (userAge)
if (userAge>18){
    alert ('Podes ingresar')
    do{
        userAnswer = prompt ('¿Qué bebidas buscas?')
        console.log (`El cliente dijo: ${userAnswer}, pero en lowercase es ${userAnswer.toLowerCase()}`)
        switch (userAnswer.toLowerCase ()) {
            case 'vino':
                userPick = wine
                break;
            case 'cerveza':
                userPick = beer
                break;
            case 'champagne':
                userPick = champagne
                break;
            case 'gaseosa':
                userPick = softDrink
                break;
            case 'agua':
                userPick = water
                break;    
            default:
                alert ('¡No tenemos la bebida que buscas!')
                break;
        }
    } while (!userAnswer)

} else{
    alert ('Lo lamento! Por tu edad no podes continuar')
}
console.log(`Tu bebida es: ${userPick}`)
