const contacto = []

const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")

let parametros = {
    user_id: 'zots0VeKUlPsjtBAr',
    service_id: 'service_o3wnh5r',
    template_id: 'template_x35c3cq',
    template_params: {}
};

const btnCancelar = document.getElementById("btnCancelar")

document.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.info("Frenamos el evento SUBMIT")
})

const btnEnviar = document.querySelector('#btnEnviar')

btnEnviar.addEventListener("click", (e)=> {
    e.preventDefault()

    parametros.template_params = {
        'name': inputNombre.value,
        'phone': inputTelefono.value,
        'email': inputEmail.value 
    }

    sendEmail(parametros)

    contacto.push({nombre: inputNombre.value})
    contacto.push({telefono: inputTelefono.value})
    contacto.push({email: inputEmail.value})

    localStorage.setItem("contacto", JSON.stringify(contacto))
    console.log ("Se incluyó nombre de contacto.")

    // btnCancelar.click()
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



// console.log(recuperarDatos())    

btnCancelar.addEventListener("click", ()=> {
    inputNombre.value = ""
    inputTelefono.value = ""
    inputEmail.value = ""
    location.href = "index.html"
})



const sendEmail = (parametros) => {
    let headers = {
        'Content-type': 'application/json'
    };
    
    let options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(parametros)
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            console.log('El email ha sido enviado con exito.');
        } else {
            return httpResponse.text()
              .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
        console.log('Oops... ' + error);
    });
}



