function Caucion (vivienda, valorAlquiler, expensas, meses, tasa){
    this.vivienda = vivienda
    this.valorAlquiler = valorAlquiler
    this.expensas = expensas
    this.meses = meses
    this.tasa = tasa
    this.iva = 1.21
}

tituloSecundario.innerText = "Garantías de Alquiler"

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





