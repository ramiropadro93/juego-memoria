document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {
            "nombre": "caballo",
            "imagen": "../images/caballo.png" 
        },
        {
            "nombre": "cerdo",
            "imagen": "../images/cerdo.png" 
        },
        {
            "nombre": "gallina",
            "imagen": "../images/gallina.png" 
        },
        {
            "nombre": "gato",
            "imagen": "../images/gato.png" 
        },
        {
            "nombre": "oveja",
            "imagen": "../images/oveja.png" 
        },
        {
            "nombre": "pato",
            "imagen": "../images/pato.png" 
        },
        {
            "nombre": "perro",
            "imagen": "../images/perro.png" 
        },
        {
            "nombre": "vaca",
            "imagen": "../images/vaca.png" 
        },
        {
            "nombre": "caballo",
            "imagen": "../images/caballo.png" 
        },
        {
            "nombre": "cerdo",
            "imagen": "../images/cerdo.png" 
        },
        {
            "nombre": "gallina",
            "imagen": "../images/gallina.png" 
        },
        {
            "nombre": "gato",
            "imagen": "../images/gato.png" 
        },
        {
            "nombre": "oveja",
            "imagen": "../images/oveja.png" 
        },
        {
            "nombre": "pato",
            "imagen": "../images/pato.png" 
        },
        {
            "nombre": "perro",
            "imagen": "../images/perro.png" 
        },
        {
            "nombre": "vaca",
            "imagen": "../images/vaca.png" 
        },
    ];

    data.sort(() => 0.5 - Math.random());
    
    var grid = document.querySelector('.grid');
    var resultado = document.querySelector('#resultado');
    var btnReiniciar = document.querySelector('#btnReiniciar')
    var puntos = [];
    var tarjetasGiradas = [];
    var tarjetasGiradasId = [];
    
    console.log(data);
    
    function crearTablero() {
        resultado.textContent = 'Puntos: 0';
        resultado.setAttribute('class','resultado');
        var tarjetas = data;
        for (let i = 0; i < tarjetas.length; i++) {
            var tarjeta = document.createElement('img');
            tarjeta.setAttribute('src', '../images/granja.png');
            tarjeta.setAttribute('data-id', i);
            tarjeta.setAttribute('class','tarjeta');
            tarjeta.addEventListener('click', girarTarjeta, true);
            grid.appendChild(tarjeta);
        }
    }

    function controlarMatch() {
        var tarjetas = document.querySelectorAll('img');
        const tarjetaId1 = tarjetasGiradas[0];
        const tarjetaId2 = tarjetasGiradas[1];

        console.log('tarjetaId1', tarjetaId1);
        console.log('tarjetaId2', tarjetaId2);

        if (tarjetaId1 == tarjetaId2) {
            tarjetas[tarjetasGiradasId[0]].setAttribute('src', '../images/ok.png');
            tarjetas[tarjetasGiradasId[1]].setAttribute('src', '../images/ok.png');
            tarjetas[tarjetasGiradasId[0]].removeEventListener('click', girarTarjeta, true);
            tarjetas[tarjetasGiradasId[1]].removeEventListener('click', girarTarjeta, true);

            puntos.push(tarjetasGiradas);
        } else {
            tarjetas[tarjetasGiradasId[0]].setAttribute('src', '../images/granja.png');
            tarjetas[tarjetasGiradasId[1]].setAttribute('src', '../images/granja.png');
        }
        tarjetasGiradas = [];
        tarjetasGiradasId = [];
        resultado.textContent = 'Puntos: ' + puntos.length;

        if (puntos.length === data.length/2) {
            resultado.textContent = 'FELICITACIONES GANASTE';
            resultado.setAttribute('class','ganador');
            grid.setAttribute('class','no-display');
            btnReiniciar.setAttribute('class', 'btn-reiniciar');
        }
    }

    function girarTarjeta() {
        var tarjetaId = this.getAttribute('data-id');
        tarjetasGiradas.push(data[tarjetaId].nombre);
        tarjetasGiradasId.push(tarjetaId);
        this.setAttribute('src', data[tarjetaId].imagen);

        if (tarjetasGiradas.length === 2) {
            setTimeout(controlarMatch, 500);
        }
    }
    
    crearTablero();
});

