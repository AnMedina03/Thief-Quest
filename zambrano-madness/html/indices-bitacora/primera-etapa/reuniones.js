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
            <h3 class="text-white title-bg iguana-title">Elementos del prototipo</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    Durante la discusión referente al avance del juego se planteó el desarrollo de las 4 áreas del juego para brindar como entregables en el parcial, 
                    en donde se acordó netamente desarrollar la primera área del juego "Capwell" como entregable final.
                    El prototipo del juego constará de lo siguiente:
                    <li style="text-align:justify">
                        Pantalla de inicio de juego: Con las opciones de jugar o salir
                    </li>
                    <li style="text-align:justify">
                       Área de la catedrál: En esta se encontrará la catedral donde el ladrón deberá entrar tras derrotar a las 4 iguanas.
                       De momento para el prototipo, esta área estará enfocada en darle acceso al jugador para que pueda dirigirse a la zona del "Capwell"   
                    </li>
                    <li style="text-align:justify">
                        Área del Capwell (1): En la primera sección el jugador deberá destruir unos generadores electricos para avanzar a la siguiente zona mientras
                        busca sobrevivir a los murciélagos que lo acechan.
                    </li>
                    <li style="text-align:justify">
                        Área del Capwell (2): En esta zona la dinámica es similar, con la diferencia que esta zona se encontrará la primera arma legendaria del juego "Oppenheimer Criollo".
                        Un arma que será necesaria para facilitar el avance a la zona del jefe.
                    </li>
                    <li style="text-align:justify">
                        Área del Capwell (3): Última zona del juego donde el jugador deberá derrotar a la Iguana Eléctrica de la Zona.
                    </li>
                    <br>
                    <img src="../../img/diseño_juego_digital/Menu.png">  
                    </div> 
                    <br>
                    <div style="display: flex; justify-content: space-evenly;">
                    <img src="../../img/diseño_juego_digital/Mapa02.png">  
                    </div> 
                    </p>
            </div>
            <h3 class="text-white title-bg iguana-title">Herramientas usadas</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                <li style="text-align:justify">
                    Motor de Juego - Unity (combinando entre elementos de 2D y 3D). En este motor se desarrollaron los entornos y objetos 3D que rodean a los personajes 2D hechos con pixel art.
                    Se incorporaron "NavMesh Components" para ayudar al movimiento con inteligencia artificial de los enemigos.
                </li>
                <br>
                <div style="display: flex;justify-content: space-evenly;">
                    <img src="../../img/diseño_juego_digital/Herramientas1.png" class="inspiracion-portada"> 
                    <img src="../../img/diseño_juego_digital/Herramientas8.png" class="inspiracion-portada">   
                </div>
                <br>
                <li style="text-align:justify">
                    Voces y sonidos - MusicGen: Es un avanzado modelo de texto a música que utiliza inteligencia artificial para transformar texto en composiciones musicales complejas y expresivas.
                    A su vez, se empleó ChatGPT para describir música para modelos como MusicGen ofrece una manera eficaz y detallada de comunicar las características deseadas de una composición musical.
                </li>
                
                <li style="text-align:justify">
                    Voces y sonidos - FreeSound:Es una plataforma en línea que ofrece una amplia colección de sonidos y muestras de audio de libre acceso. 
                </li>
                <br>
                <div style="display: flex;justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/Herramientas6.png" class="inspiracion-portada"> 
                        <img src="../../img/diseño_juego_digital/Herramientas2.png" class="inspiracion-portada"> 
                </div>
                <br>
                <li style="text-align:justify">
                    Diseño de Personajes: Piskell app y ClipStudioPain para el desarrollo de sprites en pixel art. 
                </li>
                <br>
                <div style="display: flex;justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/Herramientas3.png" class="inspiracion-portada">  
                        <img src="../../img/diseño_juego_digital/Herramientas7.png" class="inspiracion-portada">  
                </div>
                <br>
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