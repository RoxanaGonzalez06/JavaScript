let variable = "Hola! soy tu cotizador de Caución"

// let userName = prompt("Por favor ingresá tu nombre.")

let userAnswer

function Caucion (vivienda, valorAlquiler, expensas, meses, tasa){
    this.vivienda = vivienda
    this.valorAlquiler = valorAlquiler
    this.expensas = expensas
    this.meses = meses
    this.tasa = tasa
    this.iva = 1.21
}
    
const particular = new Caucion ("particular", "valorAlquiler", "expensas", "meses", 1.85)
const muebles = new Caucion ("muebles", "valorAlquiler",  "expensas", "meses", 2.05)
const comercial = new Caucion ("comercial", "valorAlquiler",  "expensas", "meses", 2.50)
const industrial = new Caucion ("industrial", "valorAlquiler",  "expensas", "meses", 3.15)

let arrayCaucion = [particular, muebles, comercial, industrial]
console.log(arrayCaucion)

let arraymeses = [6, 12, 18, 24, 30, 36]

// if (!userName){
//     alert('No pusiste tu nombre')
//     let userName = prompt("Por favor ingresá tu nombre.")
// } else{
//     alert (`En hora buena ${userName} aquí podras cotizar tu seguro de Caución de alquiler`)
// }

// let userAge = parseInt (prompt ('Antes de comenzar: ¿Cuantos años tenes?'))
// console.log (userAge)
// if (userAge>18){
//     alert ('Podes ingresar')
    // do{
    //     userAnswer = prompt ('¿La caución es para un alquiler de vivienda particular, muebles, inmuebles de uso comercial o inmuebles de uso industrial?')
    //     valorAlquiler(arrayCaucion, userAnswer)
    // } while (!userAnswer)

// } else{
//     alert ('Lo lamento! Por tu edad no podes continuar')
// }

function calcular(alquiler, expensas, meses, tasa){
    division = 1000
    console.log(alquiler, expensas, meses, tasa, division)
    console.log("Resultado:", (((alquiler+expensas) *meses)*tasa)/division)
    return (((alquiler+expensas) *meses)*tasa)/division
}

// function valorAlquiler (arrayCaucion, userAnswer) { 
    // console.log(arrayCaucion)  
    // let alquiler = parseInt(prompt("Ingresá el costo mensual del alquiler"))
    // let expensas = parseInt(prompt("Ingresá el importe de las expensas actuales"))
    // let meses = parseInt(prompt("Ingresá el numero de meses de tu contrato de alquiler"))
    
    // if (userAnswer === arrayCaucion[0].vivienda) {
    //     alert(`El precio de su caucion de alquiler de Vivienda Particular ${arrayCaucion[0].vivienda} es: ${calcular (alquiler, meses, expensas, arrayCaucion[0].tasa)}`)
    // } else if (userAnswer === arrayCaucion[1].vivienda) {
    //     alert(`El precio de su caucion de alquiler de Mueble ${arrayCaucion[1].vivienda} es: ${calcular (alquiler, expensas, meses, arrayCaucion[1].tasa)}`)
    //  }else if (userAnswer === arrayCaucion[2].vivienda) {
    //     alert(`El precio de su caucion de alquiler Comercial ${arrayCaucion[1].vivienda} es: ${calcular (alquiler, expensas, meses, arrayCaucion[2].tasa)}`)
    // } else if (userAnswer === arrayCaucion[3].vivienda) {
    //     alert(`El precio de su caucion de alquiler Industrial ${arrayCaucion[1].vivienda} es: ${calcular (alquiler, expensas, meses, arrayCaucion[3].tasa)}`)
    // }
// }

const tituloPrincipal = document.getElementById("tituloPrincipal")
const tituloSecundario = document.getElementById("tituloSecundario")
const cotizadorAlquiler = document.getElementById("cotizadorAlquiler")
const btnSolicitar = document.getElementById("btnSolicitar")

const tiposAlquileres = document.getElementsByClassName("tiposAlquileres")
const cantidadMeses = document.getElementsByClassName("cantidadMeses")

tituloSecundario.innerText = "Garantías de Alquiler"

const mesAeliminar = document.getElementById("meses30")
const mesAeliminardos = document.getElementById("meses36")
mesAeliminar.remove()
mesAeliminardos.remove()

const importeAlquiler = document.querySelector(`#importeAlquiler`)
const valorExpensas = document.querySelector(`#valorExpensas`)

const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if(campo.type != "submit"){
            campo.addEventListener("focus", ()=> campo.className = "fondoCuadroTexto")
            campo.addEventListener("blur", ()=> campo.className="")
            campo.addEventListener("input", ()=> {
                console.log(campo.value)
            })
        }
    }
}

btnSolicitar.addEventListener("mousemove", ()=> {
    btnSolicitar.title= "Hace clic para solicitar la emisión"
})

btnSolicitar.addEventListener("click", ()=>{
    location.href = "formulario.html"
})

btnCalcular.addEventListener("mousemove", ()=> {
    btnCalcular.title= "Hace clic para saber el costo"
})

document.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.info("Frenamos el evento SUBMIT")
    if(importeAlquiler.value === '0') {
        Swal.fire({
            title: '<strong>Oops...</strong>',
            text: 'El valor de alquiler debe ser mayor a 0.',
            icon: 'error',
            color: 'black',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#010377'
      })
    }
})

focoEnCampos()





