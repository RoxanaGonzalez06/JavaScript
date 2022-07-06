const contacto = []

const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")

const btnCancelar = document.getElementById("btnCancelar")

const btnEnviar = document.querySelector('#btnEnviar')
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
        Swal.fire({
            title: '<strong> ¡Muchas gracias!</strong>',
            text: 'A la brevedad te estaremos contactando.',
            imageUrl: 'https://cdn.create.vista.com/api/media/medium/219566636/stock-photo-beautiful-professional-businesswoman-talking-smartphone?token=',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
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
        location.href = "index.html"
    })



