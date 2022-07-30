const cargaTipoVivienda = ()=> {
    let opcionVivienda
        tipoVivienda.forEach(element =>{
            opcionVivienda += `<option value="${element.factor}">${element.tipo}</option>`
        })
        return opcionVivienda
}

const cargaNroMeses = ()=> {
    let opcionNroMeses
        mesesAlquiler.forEach(element =>{
            opcionNroMeses += `<option value="${element.factor}">${element.meses}</option>`
        })
        return opcionNroMeses
}

function calcular(alquiler, expensas, meses, tasa){
    division = 1000
    console.log(alquiler, expensas, meses, tasa, division)
    console.log("Resultado:", (((alquiler+expensas) *meses)*tasa)/division)
    return (((alquiler+expensas) *meses)*tasa)/division
}



const cotizarSeguroVivienda = ()=> {
    let division = 1000
    let alquiler = importeAlquiler.value
    let expensas = valorExpensas.value
    let tipoViv = seleccionTipoVivienda.value
    let mesesAlq = seleccionNroMeses.value

    if('1000' >= alquiler) {
        Swal.fire({
            title: '<strong>Oops...</strong>',
            text: 'El valor de alquiler debe ser mayor a 0.',
            icon: 'error',
            color: 'black',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#010377'
        })
    }

    return ((((alquiler+expensas) *mesesAlq)*tipoViv)/division)
}

document.addEventListener("submit", (e) =>{
    e.preventDefault()
    let cotizacion = (cotizarSeguroVivienda())
    console.info("Frenamos el evento SUBMIT")

    const costoServicio = document.getElementById("costoServicio");
    costoServicio.value = `$${cotizacion.toFixed(2)}`
})