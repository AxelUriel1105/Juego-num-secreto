let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(element, text){
    let HTMLelement = document.querySelector(element);
    HTMLelement.innerHTML = text;
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function verificarIntento(){
    //Obtener por querySelector:
    //let numeroDeUsuario = document.querySelector('input');
    //Obtener por get:
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log('intentos: '+ intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el número en ${intentos} ${intentos==1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (numeroSecreto<numeroDeUsuario){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        
        }
        limpiarCaja();
        intentos++;
    }

    return;
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        // Si el número generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo
    //generar número aleatorio
    //desabilitar botón de reiniciar
    condicionesIniciales();
    //inicializar número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
