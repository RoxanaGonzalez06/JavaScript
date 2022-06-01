
//CICLO FOR ESTATICO
// conteo desde 0 a 21
//for (let i = 0; i < 22; i++) {
//    console.log("conteo nro.",i)
//}

//CICLO FOR DINAMICO

//let limite = prompt ("Ingrese un número de dos cifras:")
   // limite = parseInt (limite)
        //lo podemos resolver un una linea:
        //let limite = parseInt(prompt ("Ingrese un número de dos cifras:"))
    //for (let i = 0; i < limite; i++) {
        //if (i == 10){
            //break
          //  continue
        //}
        //console.log("conteo nro.",i)    
    //}

debugger
let repetir = true

while (repetir){
    let nro = parseInt (prompt("ingrese un numero mayor a 21"))
    if (nro >= 21){
        repetir = false
        console.log ("al fin! XD", nro)
    }
}