const contacto = []

const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")

const btnCancelar = document.getElementById("btnCancelar")

btnEnviar.addEventListener("click", ()=> {
    contacto.push({nombre: inputNombre.value})
    contacto.push({telefono: inputTelefono.value})
    contacto.push({email: inputEmail.value})
    localStorage.setItem("contacto", JSON.stringify(contacto))
    console.log ("Se incluyó nombre de contacto.")
    btnCancelar.click()
    inputEmail.focus
    inputNombre.focus
    inputTelefono.focus
})

const recuperarDatos = () => {
    if (localStorage.getItem("contacto")){
        let contac = JSON.parse(localStorage.getItem("contacto"))
        return contac
    }
}

document.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.info("Frenamos el evento SUBMIT")
})

console.log(recuperarDatos())    

btnCancelar.addEventListener("click", ()=> {
    inputNombre.value = ""
    inputTelefono.value = ""
    inputEmail.value = ""
})



