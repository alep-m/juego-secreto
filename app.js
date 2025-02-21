let numeroMaximo = 10;
let numerosSorteados = [];
let numeroSecreto;
let intentos;

function generarNumeroSecreto(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let rng;
    // Both max and min are inclusive

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextElemento("p", "Se han sorteado todos los numeros");
    } else {
        do {
            rng = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        } while (numerosSorteados.includes(rng));
    }

    numerosSorteados.push(rng);

    return rng;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (isNaN(numeroUsuario)) {
        asignarTextElemento("p", "Indica un numero del 1 al 10");
        return;
    }

    intentos++;
    if (numeroUsuario === numeroSecreto) {
        asignarTextElemento("p", `Asertaste el numero en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}!`);
        document.querySelector("#reiniciar").disabled = false;
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTextElemento("p", "El numero secreto es mayor");
        } else if (numeroUsuario > numeroSecreto) {
            asignarTextElemento("p", "El numero secreto es menor");
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
}

function reiniciarJuego() {
    estadoBotonReiniciar(false);
    limpiarCaja();
    asignarTextElemento("p", "Indica un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto(1, 10);
    intentos = 0;

    console.log(numeroSecreto, numerosSorteados.toString());
}

function estadoBotonReiniciar(estado) {
    // true: active
    // false: inactive
    document.querySelector("#reiniciar").disabled = !estado;
}

function asignarTextElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextElemento("h1", "Juego del numero secreto!");
reiniciarJuego();
