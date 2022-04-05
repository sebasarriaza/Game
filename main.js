//Mejoras:
//1. Cambiar el array por un objeto para facilitar la lectura del código. P.e.: {Enunciado: 'Alemania', Respuesta1: 'Viena', Respuesta2: 'Berlin', Respuesta3: 'Bruselas', Respuesta4: 'Nicosia', Imagen: 'germany', Correcta: 'Berlin'}
//2. Añadir más contienentes y separarlos en preguntas
//3. Guardar puntuación máxima en la pantalla de inicio (con localstorage)

// Declarar variables
// Ordenadas siguiendo el orden en el que aparecen
let numeroPuntos;
let numeroPregunta;
let ordenPreguntas = [0, 1, 2, 3, 4, 5];
let ordenRespuestas = [1, 2, 3, 4];
let mostrarNumeroPregunta = document.getElementById('mostrarNumeroPregunta');
let enunciado = document.getElementById('enunciado');
let respuesta = document.getElementById('botonRespuesta');
let puntos = document.getElementById('puntos');
let listaPreguntas = [
    ['ALEMANIA', 'Viena', 'Berlín', 'Bruselas', 'Nicosia', 'germany', 'Berlín'],
    ['ANDORRA', 'Tallin', 'Minsk', 'Andorra la Vieja', 'Copenhage', 'andora', 'Andorra la Vieja'],
    ['BULGARIA', 'Helsinki', 'Zagreb', 'Sofía', 'París', 'bulgaria', 'Sofía'],
    ['GRECIA', 'Atenas', 'Copenhague', 'Tirana', 'Sarajevo', 'greece', 'Atenas'],
    ['AUSTRIA', 'Madrid', 'Bratislava', 'Bruselas', 'Viena', 'austria', 'Viena'],
    ['DINAMARCA', 'Bratislava', 'Copenhague', 'Dublín', 'Luxemburgo', 'denmark', 'Copenhague'],
];
// let respuestaCorrecta = [2, 3, 3, 1, 4, 2]
let sonidoAcierto = new Audio('./sounds/acierto.mp3');
let sonidoFallo = new Audio('./sounds/fallo.mp3');
let puntuacionFinal = document.getElementById('puntuacionFinal');


// Declarar funciones
// Ordenadas siguiendo el orden en el que aparecen
function inicio(){
    numeroPregunta = 0;
    numeroPuntos = 0;
    puntos.innerHTML = numeroPuntos;
    document.getElementById('acierto').style.display = 'none';
    document.getElementById('siguientePregunta').style.display = 'none';
    document.getElementById('terminar').style.display = 'none';
    montarPregunta(numeroPregunta);
};

function desordenar(array){
    array = array.sort(function(){return Math.random() - 0.5;});
    return array;
};
ordenPreguntas = desordenar(ordenPreguntas);
ordenRespuestas = desordenar(ordenRespuestas);

function montarPregunta(numeroPregunta){
    document.getElementById('titulo').style.display = 'block';
    document.getElementById('enunciado').style.display = 'block';
    document.getElementById('grupoRespuestas').style.display = 'block';
    document.getElementById('mostrarNumeroPregunta').style.display = 'block';
    document.getElementById('acierto').style.display = 'none';
    document.getElementById('siguientePregunta').style.display = 'none';
    preguntaActual = ordenPreguntas[numeroPregunta];
    enunciado.innerHTML = listaPreguntas[preguntaActual][0];
    mostrarNumeroPregunta.innerHTML = 'Pregunta ' + (numeroPregunta + 1);
    for (var i = 0; i<=3; i++){
        respuesta = listaPreguntas[ordenPreguntas[numeroPregunta]][ordenRespuestas[i]];
        window['botonRespuesta' + (i + 1)].innerHTML = respuesta;
    }
    for (var i = 0; i<=4; i++){
        document.getElementById('imagen' + i).src = '';
    }
    document.getElementById('imagen' + [ordenPreguntas[numeroPregunta]]).src = 'https://img.icons8.com/color/48/000000/' + listaPreguntas[ordenPreguntas[numeroPregunta]][5] + '-circular.png';
};

function comprobarRespuesta(respuesta){
    if (respuesta == listaPreguntas[ordenPreguntas[numeroPregunta]][6]){
        sonidoAcierto.play();
        document.getElementById('titulo').style.display = 'none';
        document.getElementById('enunciado').style.display = 'none';
        document.getElementById('grupoRespuestas').style.display = 'none';
        document.getElementById('acierto').style.display = 'block';
        document.getElementById('mostrarNumeroPregunta').style.display = 'none';
        document.getElementById('acierto').style.display = 'block';
        document.getElementById('siguientePregunta').style.display = 'block';
        document.getElementById('imagen' + ordenPreguntas[numeroPregunta]).src = '';
        numeroPuntos += 10;
        numeroPregunta += 1;
    }
    else{
        sonidoFallo.play();
        numeroPuntos -= 5;
    };
    puntos.innerHTML = numeroPuntos;
};

function siguientePregunta(){
    //Comprobar si quedan más preguntas
    if (numeroPregunta < listaPreguntas.length){
        document.getElementById('acierto').style.display = 'none'
        montarPregunta(numeroPregunta);
    }
    else{
        document.getElementById('siguientePregunta').style.display = 'none';
        document.getElementById('acierto').style.display = 'none'
        document.getElementById('terminar').style.display = 'block';
        localStorage.setItem('puntuacionFinal', numeroPuntos);
    }
};

function mostrarPuntos(){
    puntuacionFinal.innerHTML = 'Tu puntuación ha sido de ' + localStorage.getItem('puntuacionFinal') + ' puntos';
};


// let ordenPreguntas = [0, 1, 2, 3, 4, 5]
// function desordenar(){
//     ordenPreguntas = ordenPreguntas.sort(function(){return Math.random() - 0.5;});
//     return ordenPreguntas;
// }
// ordenPreguntas = desordenar();

// console.log(ordenPreguntas);

// console.log();
// console.log(listaPreguntas[2]);
// preguntaActual = listaPreguntas[ordenPreguntas][0];
// console.log(listaPreguntas[ordenPreguntas[0]]);
// preguntaActual = listaPreguntas[ordenPreguntas[0 + 1]];
// console.log(preguntaActual);


//FUNCIONAMIENTO PONIENDO ordenPreguntas EN CADA LÍNEA
// function montarPregunta(numeroPregunta){
//     document.getElementById('titulo').style.display = 'block';
//     document.getElementById('enunciado').style.display = 'block';
//     document.getElementById('grupoRespuestas').style.display = 'block';
//     document.getElementById('mostrarNumeroPregunta').style.display = 'block';
//     document.getElementById('acierto').style.display = 'none';
//     document.getElementById('siguientePregunta').style.display = 'none';
//     preguntaActual = listaPreguntas[ordenPreguntas[numeroPregunta]];
//     enunciado.innerHTML = preguntaActual[0];
//     mostrarNumeroPregunta.innerHTML = 'Pregunta ' + (numeroPregunta + 1);
//     // console.log(numeroPregunta);
//     console.log(listaPreguntas[ordenPreguntas[numeroPregunta]][i]);
//     for (var i = 1; i<=4; i++){
//         respuesta = listaPreguntas[ordenPreguntas[numeroPregunta]][i];
//         window['botonRespuesta' + i].innerHTML = respuesta;
//     }
//     for (var i = 0; i<=4; i++){
//         document.getElementById('imagen' + i).src = '';
//     }
//     document.getElementById('imagen' + numeroPregunta).src = 'https://img.icons8.com/color/48/000000/' + listaPreguntas[numeroPregunta][5] + '-circular.png';
// };
