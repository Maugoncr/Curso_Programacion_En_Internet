
function evaluarJuego() {
    
    var jugadaComputadora = generarJugadaComputadora();
    var jugadaUsuario = document.getElementById('jugadaUsuario').value;
    var mostrarJugadaComputadora = document.getElementById('jugadaComputadora');
    var mostrarResultado = document.getElementById('resultado');

    mostrarJugadaComputadora.value=jugadaComputadora;

    var resultado="";

    if(jugadaComputadora == jugadaUsuario){
        resultado = "EMPATE";
    }
    else{
        if(jugadaComputadora == "PIEDRA" && jugadaUsuario=="PAPEL"){
             resultado = "GANASTE";
        }
        if(jugadaComputadora == "PIEDRA" && jugadaUsuario=="TIJERA"){
            resultado = "PERDISTE";
        }
        if(jugadaComputadora == "PAPEL" && jugadaUsuario=="PIEDRA"){
            resultado = "PERDISTE";
        }
        if(jugadaComputadora == "PAPEL" && jugadaUsuario=="TIJERA"){
           resultado = "GANASTE";
        }       
        if(jugadaComputadora == "TIJERA" && jugadaUsuario=="PIEDRA"){
            resultado = "GANASTE";
        }
        if(jugadaComputadora == "TIJERA" && jugadaUsuario=="PAPEL"){
           resultado = "PERDISTE";
        }   
    }

    mostrarResultado.value = resultado;

} 

function generarJugadaComputadora() {

    var jugadaComputadora="";
    var azar = Math.floor(Math.random()*3)+1;

    if(azar==1){
        jugadaComputadora="PIEDRA";
    }
    if(azar==2){
        jugadaComputadora="PAPEL";
    }
    if(azar==3){
        jugadaComputadora="TIJERA";
    }

    return jugadaComputadora;
}

function volverAJugar() {

    var jugadaComputadora = document.getElementById('jugadaComputadora');
    var jugadaUsuario = document.getElementById('jugadaUsuario');
    var resultado = document.getElementById('resultado');

    jugadaComputadora.value = "OCULTA";
    jugadaUsuario.value = "";
    resultado.value = "¿?";
}