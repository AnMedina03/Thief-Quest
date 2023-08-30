const seccionSiete = document.getElementById("TipoI7");
seccionSiete.addEventListener('click', puntoAII);

function puntoAII(){
    const regionContenido = document.getElementById("JavascriptFile");

    videoFormato = (url) => `
        <iframe class="video-reunion" src="${url}" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture; web-share" allowfullscreen>
        </iframe>
    `

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting 2</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg thief-title">Elementos</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:white;">Detalle de elementos usados:</p>
                <p style="color:lightblue;">
                    Para el Playtesting Two se presentó una versión del juego un poco más desarrollada con los cambios realizados. Esto es una prueba de cámara,
                    interacción, nuevo objeto y el diseño del juego (dibujos, audios, iluminación y mecánica):
                </p>
                <p style="color:lightblue;">
                    <a href="juego/reglas.html">Descarga el juego</a>
                </p>
            </div>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting2/HealthBar.png" alt="Recursos en Unity" class="playtesting-element-h1">
                <img src="../../img/zambrano/PlayTesting2/Attack.png" alt="Mapa de Areas" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting2/IAArea.png" alt="Sprites" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting2/Menu.png" alt="Sprites" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Se presentó una versión del juego en la que se han añadido cambios en base a las tareas planificadas para la
                        segunda iteración del proyecto y las observaciones del primer playtesting, cabe destacar que no se han
                        aplicado todos los cambios puesto a que se dieron prioridad a las tareas por cumplir según la planificación,
                        además de que ciertas tareas tomaron más tiempo de lo esperado, por lo que algunas tareas y cambios pendientes
                        pasaron a las siguientes iteraciones.
                        Las tareas para esta iteración eran:
                    </p>
                </div>
                <li style="color:lightblue;">
                    Guión de la historia.
                </li>
                <li style="color:lightblue;">
                    Colisiones, acciones y punto de vida.
                </li>
                <li style="color:lightblue;">
                    Animación de ataque.
                </li>
                <li style="color:lightblue;">
                    Puntos de generación de enemigos.
                </li>
                <li style="color:lightblue;">
                    Movimiento con IA de enemigos.
                </li>
                <li style="color:lightblue;">
                    Sección de pausa.
                </li>
                <li style="color:lightblue;">
                    Iluminación de entorno y objetos
                </li>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting2/PlayTest1.png" alt="Prueba 0 - Escena 1" class="foto-playtesting">
                <img src="../../img/zambrano/PlayTesting2/PlayTest2.png" alt="Prueba 0 - Escena 1" class="foto-playtesting">
                <img src="../../img/zambrano/PlayTesting2/PlayTest3.gif" alt="Prueba 0 - Escena 1" class="foto-playtesting-h1">
            </div>
            <div class="puntos-clave"  style="padding: 1vh; margin: 1vh;">
                <li style="color:lightblue;">
                    El jugador se trababa con los enemigos que lo rodeaba.
                </li>
                <li style="color:lightblue;">
                El jugador no asoció el generador grande del área 2 como parte del Sistema de desbloqueo de la Puerta.
                </li>
                <li style="color:lightblue;">
                Los generadores del área del jefe no funcionaban correctamente.
                </li> 
                <li style="color:lightblue;">
                El jugador no sabía cómo poner pausa al juego.
                </li> 
                <li style="color:lightblue;">
                No sabía si el enemigo y el generador sufría daño.
                </li>
                <li style="color:lightblue;">
                Bajar el volumen de los SFX del ladrón y subir el de las máquinas al destruirse.
                </li>
                <div class="linea">
                    <p style="color:lightblue;">
                    <i>Revisar la sección de VIDEOS para más detalles</i>
                    </p>
                </div>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Retroalimentación y Cambios</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting2/cambio1.png" alt="Cambio 1 - PlayTest 2" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting2/cambio2.png" alt="Cambio 2 - PlayTest 2" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting2/cambio3.png" alt="Cambio 3 - PlayTest 2" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting2/cambio4.gif" alt="Cambio 4 - PlayTest 2" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <li style="color:lightblue;">
                    Ajustar el posicionamiento de la cámara para que sea más visible la zona del laberinto.
                </li>
                <li style="color:lightblue;">
                    Ajustar el posicionamiento de la cámara para que sea más visible la zona del laberinto.
                </li>
                <li style="color:lightblue;">
                    Adición de mecánica de ataque para destruir los generadores y enemigos - junto con información visual de la cantidad de generadores.
                </li>
                <li style="color:lightblue;">
                    Adición de elementos de sonido en animaciones y sprites nuevos.
                </li> 
                <li style="color:lightblue;">
                    Ajustar elementos visuales para que sean "responsive"
                </li>
            </div>
        </div>
    </section>
    
    
    `;
}
