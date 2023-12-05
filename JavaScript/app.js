
let puntosUsuario = 0;
let puntosPC = 0;

//Trayendo los elementos desde el HTML para poder tener acceso en JavaScript
let instrucciones = document.querySelector('#instrucciones');
let contenedorPuntosUsuario = document.querySelector('#puntos-usuario');
let contenedorPuntosPC = document.querySelector('#puntos-computadora');
let mensaje = document.querySelector('#mensaje');
let contenedorGanaPunto = document.querySelector('#gana-punto');
let eligeTuArma = document.querySelector('#elige-tu-arma');


let contenedorEleccionUsuario = document.querySelector('#eleccion-usuario');
let contenedorEleccionPC = document.querySelector('#eleccion-computadora');


let botonesArmas = document.querySelectorAll('.arma'); //Ciclo de recorrido para cada uno de los botones de eleccion del item para cada uno responda al evento click y ejecute la funcion iniciar turno
botonesArmas.forEach(boton => {
    boton.addEventListener('click', iniciarTurno)
});


//Creando la función para iniciar cada ronda del juego y determinar en cada ronda un ganador con sus respectivos mensajes de gana o pierde
 function iniciarTurno (e) {
    let eleccionPC = Math.ceil(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id; //currentTarget es una propiedad del objeto evento que devuelve el id del elemento al que se le esta haciendo click el cual esta ubicado en el html 

    //piedra => 1
    //piedra => 2
    //piedra => 3

    /** Igualando la elección random para que en vez de números aparezca lo correspondiente **/

    if(eleccionPC === 1) { 
        eleccionPC = 'piedra🪨';
    } else if( eleccionPC === 2) {
        eleccionPC = 'papel📄';
    } else if(eleccionPC === 3){
        eleccionPC = 'tijera✂️'
    }
    console.log(eleccionUsuario);
    console.log(eleccionPC);
    
    
    //piedra vence a tijera
    //tijera vence a papel
    //papel vence a piedra
    //si son iguales es empate

    if(
    eleccionUsuario === 'piedra🪨' && eleccionPC === 'tijera✂️' ||
    eleccionUsuario === 'tijera✂️' && eleccionPC === 'papel📄' ||
    eleccionUsuario === 'papel📄' && eleccionPC === 'piedra🪨'
    ) { 
         ganaUsuario();

    } 
    
    else if(
    eleccionPC === 'piedra🪨' && eleccionUsuario === 'tijera✂️' ||
    eleccionPC === 'tijera✂️' && eleccionUsuario === 'papel📄' ||
    eleccionPC === 'papel📄' && eleccionUsuario === 'piedra🪨' 
    ) {
        ganaPC();
    }
    else {
        empate();
    }
    mensaje.classList.remove('disabled'); //Anulando la clase diabled del elemento con class mensaje para que aparezca el mensaje al iniciar el juego 
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if(puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5 ) { 
        instrucciones.innerText = '🔥 ¡Ganaste el juego🔥!';

        }
    
        else if(puntosPC === 5) {
            instrucciones.innerText = '🫠Has perdido el juego🫠';
        }

        eligeTuArma.classList.add('disabled');
        reiniciar.classList.remove('disabled');
        reiniciar.addEventListener('click', reiniciarJuego);
    }

}
    function ganaUsuario() {
        puntosUsuario ++;
        contenedorPuntosUsuario.innerText = puntosUsuario;
        contenedorGanaPunto.innerText = '¡Ganaste un punto 🔥!'
    }

    function ganaPC() {
        puntosPC ++;
        contenedorPuntosPC.innerText = puntosPC;
        contenedorGanaPunto.innerText = 'Perdiste en esta ocasión 🫠'
    };

    function empate() {
        contenedorGanaPunto.innerText = '¡Empate! 🫥'
    };

    function reiniciarJuego () {
        reiniciar.classList.add('disabled');
        eligeTuArma.classList.remove('disabled');
        mensaje.classList.add('disabled');

        puntosPC = 0;
        puntosUsuario = 0;

        contenedorPuntosUsuario.innerText = puntosUsuario;
        contenedorPuntosPC.innerText = puntosPC;

        instrucciones.innerText = 'El primero en llegar a 5 puntos es el ganador';
    }                    
                                                                                                                                    