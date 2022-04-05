//Mejoras:
// Guardar puntuación máxima (con localstorage) y mostrarla en la pantalla de inicio

// Declarar variables
let numeroPuntos;
let numeroPregunta;
let mostrarNumeroPregunta = document.getElementById('mostrarNumeroPregunta');
let enunciado = document.getElementById('enunciado');
let respuesta = document.getElementById('botonRespuesta');
let puntos = document.getElementById('puntos');
let puntuacionFinal = document.getElementById('puntuacionFinal');
let sonidoAcierto = new Audio('./sounds/acierto.mp3');
let sonidoFallo = new Audio('./sounds/fallo.mp3');
let datos = {
    europa: [
        { enunciado: 'ALEMANIA', respuesta: ['Berlín', 'Viena', 'Bruselas', 'Nicosia'], imagen: 'germany', correcta: 'Berlín' },
        { enunciado: 'ANDORRA', respuesta: ['Andorra la Vieja', 'Tallin', 'Minsk', 'Copenhague'], imagen: 'andora', correcta: 'Andorra la Vieja' },
        { enunciado: 'BULGARIA', respuesta: ['Sofía', 'Helsinki', 'Zagreb', 'París'], imagen: 'bulgaria', correcta: 'Sofía' },
        { enunciado: 'GRECIA', respuesta: ['Atenas', 'Copenhague', 'Tirana', 'Sarajevo'], imagen: 'greece', correcta: 'Atenas' },
        { enunciado: 'AUSTRIA', respuesta: ['Viena', 'Madrid', 'Bratislava', 'Bruselas'], imagen: 'austria', correcta: 'Viena' },
        { enunciado: 'DINAMARCA', respuesta: ['Copenhague', 'Bratislava', 'Dublín', 'Luxemburgo'], imagen: 'denmark', correcta: 'Copenhague' }
    ],
    america: [
        { enunciado: 'ESTADOS UNIDOS', respuesta: ['Washington D. C.', 'Bogotá', 'Quito', 'Kingston'], imagen: 'usa', correcta: 'Washington D. C.' },
        { enunciado: 'CANADÁ', respuesta: ['Ottawa', 'Ciudad de México', 'Santiago', 'La Habana'], imagen: 'canada', correcta: 'Ottawa' },
        { enunciado: 'MÉXICO', respuesta: ['Ciudad de México', 'Brasilia', 'Ottawa', 'Buenos Aires'], imagen: 'mexico', correcta: 'Ciudad de México' },
        { enunciado: 'COLOMBIA', respuesta: ['Bogotá', 'Santiago', 'Quito', 'Lima'], imagen: 'colombia', correcta: 'Bogotá' },
        { enunciado: 'VENEZUELA', respuesta: ['Caracas', 'Brasilia', 'Lima', 'La Habana'], imagen: 'venezuela', correcta: 'Caracas' },
        { enunciado: 'BRASIL', respuesta: ['Brasilia', 'Santiago', 'Lima', 'Buenos Aires'], imagen: 'brazil', correcta: 'Brasilia' }
    ],
    asia: [
        { enunciado: 'CHINA', respuesta: ['Pekín', 'Shanghai', 'Tianjin', 'Hong Kong'], imagen: 'china', correcta: 'Pekín' },
        { enunciado: 'JAPÓN', respuesta: ['Tokio', 'Seúl', 'Nagoya', 'Osaka'], imagen: 'japan', correcta: 'Tokio' },
        { enunciado: 'INDIA', respuesta: ['Nueva Delhi', 'Seúl', 'Daca', 'Moscú'], imagen: 'india', correcta: 'Nueva Delhi' },
        { enunciado: 'IRAK', respuesta: ['Teherán', 'Bagdad', 'Jerusalén', 'Tripoli'], imagen: 'iraq', correcta: 'Teherán' },
        { enunciado: 'ARABIA SAUDITA', respuesta: ['Riad', 'Manila', 'Ankara', 'Bagdad'], imagen: 'saudi-arabia', correcta: 'Riad' },
        { enunciado: 'CHIPRE', respuesta: ['Nicosia', 'Ereván', 'Kabul', 'Yakarta'], imagen: 'cyprus', correcta: 'Nicosia' }
    ],
    oceania: [
        { enunciado: 'AUSTRALIA', respuesta: ['Camberra', 'Yaren', 'Majuro', 'Brisbane'], imagen: 'australia', correcta: 'Camberra' },
        { enunciado: 'NUEVA ZELANDA', respuesta: ['Wellington', 'Sydney', 'Auckland', 'Funafuti'], imagen: 'new-zealand', correcta: 'Wellington' },
        { enunciado: 'VANUATU', respuesta: ['Port Vila', 'Palikir', 'Tarawa Sur', 'Nukualofa'], imagen: 'vanuatu', correcta: 'Port Vila' },
        { enunciado: 'ISLAS SALOMÓN', respuesta: ['Honiara', 'Ngerulmud', 'Majuro', 'Port Vila'], imagen: 'tonga', correcta: 'Honiara' },
        { enunciado: 'FIJI', respuesta: ['Suva', 'Apia', 'Nukualofa', 'Ngerulmud'], imagen: 'fiji', correcta: 'Suva' },
        { enunciado: 'PAPÚA NUEVA GUINEA', respuesta: ['Port Moresby', 'Majuro', 'Nukualofa', 'Suva'], imagen: 'papua-new-guinea', correcta: 'Port Moresby' }
    ]
};

// Declarar funciones
function inicio() {
    numeroPregunta = 0;
    numeroPuntos = 0;
    puntos.innerHTML = numeroPuntos;
    continente = localStorage.getItem('continente');
    document.getElementById('acierto').style.display = 'none';
    document.getElementById('siguientePregunta').style.display = 'none';
    document.getElementById('terminar').style.display = 'none';
    datos[continente].sort(function () { return Math.random() - 0.5; });
    for (let i = 0; i < datos[continente].length; i++) {
        datos[continente][i].respuesta.sort(function () { return Math.random() - 0.5; });
    };
    montarPregunta(numeroPregunta);
};


function montarPregunta(numeroPregunta) {
    document.getElementById('titulo').style.display = 'block';
    document.getElementById('enunciado').style.display = 'block';
    document.getElementById('grupoRespuestas').style.display = 'block';
    document.getElementById('mostrarNumeroPregunta').style.display = 'block';
    document.getElementById('acierto').style.display = 'none';
    document.getElementById('siguientePregunta').style.display = 'none';
    enunciado.innerHTML = datos[continente][numeroPregunta].enunciado;
    mostrarNumeroPregunta.innerHTML = 'Pregunta ' + (numeroPregunta + 1);
    for (var i = 0; i < datos[continente][numeroPregunta].respuesta.length; i++) {
        respuesta = datos[continente][numeroPregunta].respuesta[i];
        window['botonRespuesta' + (i + 1)].innerHTML = respuesta;
    };
    document.getElementById('imagen').src = 'https://img.icons8.com/color/48/000000/' + datos[continente][numeroPregunta].imagen + '-circular.png';
};

function comprobarRespuesta(respuesta) {
    if (respuesta == datos[continente][numeroPregunta].correcta) {
        sonidoAcierto.play();
        document.getElementById('titulo').style.display = 'none';
        document.getElementById('enunciado').style.display = 'none';
        document.getElementById('grupoRespuestas').style.display = 'none';
        document.getElementById('acierto').style.display = 'block';
        document.getElementById('mostrarNumeroPregunta').style.display = 'none';
        document.getElementById('acierto').style.display = 'block';
        document.getElementById('siguientePregunta').style.display = 'block';
        document.getElementById('imagen').src = '';
        numeroPuntos += 10;
        numeroPregunta += 1;
    }
    else {
        sonidoFallo.play();
        numeroPuntos -= 5;
    };
    puntos.innerHTML = numeroPuntos;
};

function siguientePregunta() {
    //Comprobar si quedan más preguntas
    if (numeroPregunta < datos[continente].length) {
        document.getElementById('acierto').style.display = 'none'
        montarPregunta(numeroPregunta);
    }
    else {
        document.getElementById('siguientePregunta').style.display = 'none';
        document.getElementById('acierto').style.display = 'none'
        document.getElementById('terminar').style.display = 'block';
        localStorage.setItem('puntuacionFinal', numeroPuntos);
    }
};

function mostrarPuntos() {
    puntuacionFinal.innerHTML = 'Tu puntuación ha sido de ' + localStorage.getItem('puntuacionFinal') + ' puntos';
};