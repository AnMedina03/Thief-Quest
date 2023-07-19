const seccionCinco = document.getElementById("TipoI5");
seccionCinco.addEventListener('click', puntoE);

videoFormato = (url) => `
    <iframe class="video-reunion" src="${url}" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture; web-share" allowfullscreen>
    </iframe>
`

function puntoE(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Reuniones y Prototipado</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg iguana-title">Reuniones</h3>
            <br>
            <h4 class="text-white title-bg thief-title">Reunión en Equipo [1]</h4>
            <div class="fx-display fx-fil gp-1 fx-wp linea" style="padding: 1rem;">

                ${videoFormato("https://www.youtube.com/embed/w9P8IWYZVPU")}

                ${videoFormato("https://www.youtube.com/embed/erblVwkBJkc")}

                ${videoFormato("https://www.youtube.com/embed/dJdvvVamID0")}

                ${videoFormato("https://www.youtube.com/embed/5hzomPQ8AZ0")}

            </div>
            <br>

            <h4 class="text-white title-bg thief-title">Reunión en Equipo [2]</h4>
            <div class="fx-display fx-fil gp-1 fx-wp linea" style="padding: 1rem;">

                ${videoFormato("https://www.youtube.com/embed/kvDaOFGQAKY")}

                ${videoFormato("https://www.youtube.com/embed/3EO7eiVw4W8")}

                ${videoFormato("https://www.youtube.com/embed/R5dK81PyNRA")}

            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">Prototipado</h3>
            <div style="display: flex;justify-content: center; margin: 1vh;">
                <img src="../img/pruebas/prueba1.jpeg" alt="Tablero v1" width="100" height="105">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                        Principalmente se desarrolló todo de manera digital para luego proceder a imprimirlos, a excepción de las baldosas que decidimos 
                        dibuja los caminios a mano puesto a que nos pareció más sencillo de realizar. En este primer prototipado no teníamos piezas de 
                        los personajes ni un dado correspondiente, por lo que el dado lo pedíamos prestado de otro juego de mesa y los personajes los 
                        representábamos con borradores, sacapuntas y/o tapa de bolígrafo.
                    </p>
                </div>
            </div>
            <br>
            <h3 class="text-white title-bg iguana-title">Versiones de Prototipos</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                        Los detalles sobre los respectivos cambios y nuevas versiones del diseño del juego se lo puede observar en la sección de Prototipos 
                        que se detallas las pruebas realizadas durante los Play Testing.
                    </p>
                </div>
            </div>
        </div>
    </section>    
    `;
}