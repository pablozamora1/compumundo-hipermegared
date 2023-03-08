
let ciclo = true
const msjSelInicial  = "Ingresa el código del producto a consultar: \n" +
                       "a) DISCO DURO HDD 1 TB WESTERN DIGITAL \n" +
                       "b) MOUSE TRUST BASI OPTICO BLACK \n" +
                       "c) TECLADO PHILIPS K313 USB \n" +
                       "d) PENDRIVE CORSAIR 32GB SURVIVOR STEALTH 3.0 \n" +
                       "e) MICROPROCESADOR INTEL PENTIUM GOLD G6400 \n" +
                       "f) ROUTER TP LINK TL-WR841HP 300MBPS WIRELESS 2 ANT \n"




function consulta() {
    let seleccion = prompt(msjSelInicial).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" 
        && seleccion !== "d" && seleccion !== "e" && seleccion !== "f" ) {
        alert("⚠️ ingresa un código válido.")
    } else {
        switch(seleccion) {
            case "a":
                alert("DISCO DURO HDD 1 TB WESTERN DIGITAL  $ 21990")
                break
            case "b":
                alert("MOUSE TRUST BASI OPTICO BLACK $ 1099")
                break
            case "c":
                alert("TECLADO PHILIPS K313 USB $ 1890")
                break
            case "d":
                alert("PENDRIVE CORSAIR 32GB SURVIVOR STEALTH 3.0 $ 6790")
                break
            case "e":
                alert("MICROPROCESADOR INTEL PENTIUM GOLD G6400 $ 19990")
                break
            case "f":
                alert("ROUTER TP LINK TL-WR841HP 300MBPS WIRELESS 2 ANT $ 14990")
                break
            default: 
                console.error("Error.")
        }
    }
}


function consultaPrecios() {
    while(ciclo) {
        consulta()
        ciclo = confirm("¿Deseas realizar otra consulta?")
    }
}