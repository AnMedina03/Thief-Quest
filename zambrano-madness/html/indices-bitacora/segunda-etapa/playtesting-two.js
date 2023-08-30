const seccionOcho = document.getElementById("TipoI8");
seccionOcho.addEventListener('click', puntoBII);

function puntoBII(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting 3</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg thief-title">Elementos</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:white;">Detalle de elementos usados:</p>
                <p style="color:lightblue;">
                    Para el Playtesting Three se presentó una versión del juego un poco más desarrollada con los cambios realizados. Esto es una prueba de
                    interacción y el diseño del juego (dibujos, audios, iluminación y mecánica):
                </p>
                <p style="color:lightblue;">
                    <a href="juego/reglas.html">Descarga el juego</a>
                </p>
            </div>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting3/Items.png" alt="Sprites" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Se presentó una versión del juego en la que se han añadido cambios en base a las tareas planificadas para la
                        tercera iteración del proyecto y las observaciones del segundo playtesting, cabe destacar que no se han
                        aplicado todos los cambios puesto a que se dieron prioridad a las tareas por cumplir según la planificación,
                        además de que ciertas tareas tomaron más tiempo de lo esperado, por lo que algunas tareas y cambios pendientes
                        pasaron a las siguientes iteraciones.
                        Las tareas para esta iteración eran:
                    </p>
                </div>
                <li style="color:lightblue;">
                Intro del juego [Solo animación, sin integrar].
                </li>
                <li style="color:lightblue;">
                Animación de objetos.
                </li>
                <li style="color:lightblue;">
                Movimientos de enemigos.
                </li>
                <li style="color:lightblue;">
                Puntos de generación de enemigos.
                </li>
                <li style="color:lightblue;">
                Implementación de estados de enemigos y de jugador entre escenas.
                </li>
                <li style="color:lightblue;">
                Iluminación de entorno y objetos [Campo de visión].
                </li>
                <li style="color:lightblue;">
                Interacción entre objetos.
                </li>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting3/PlayTest1.png" alt="Prueba 0 - Escena 1" class="foto-playtesting">
                <img src="../../img/zambrano/PlayTesting3/BigGenerator.png" alt="Recursos en Unity" class="playtesting-element-h1">
                <img src="../../img/zambrano/PlayTesting3/Generador.png" alt="Mapa de Areas" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting3/Enemies.png" alt="Sprites" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting3/Orientacion.png" alt="Sprites" class="playtesting-element">
            </div>
            <div class="puntos-clave"  style="padding: 1vh; margin: 1vh;">
                <li style="color:lightblue;">
                El jugador no sabia con qué controles podía moverse o atacar.
                </li>
                <li style="color:lightblue;">
                No se entendían cuales eran los objetivos en cada nivel.
                </li>
                <li style="color:lightblue;">
                El color de los proyectiles lanzados por los enemigos provocaba malinterpretaciones.
                </li> 
                <li style="color:lightblue;">
                Los generadores se demoraban mucho en desaparecer.
                </li> 
                <li style="color:lightblue;">
                No sabía si el enemigo y el generador sufría daño.
                </li>
                <li style="color:lightblue;">
                No se entendía si se le estaba haciendo daño a los generadores.
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
                <img src="../../img/zambrano/PlayTesting3/cambio1.png" alt="Cambio 1 - PlayTest 2" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting3/cambio2.png" alt="Cambio 2 - PlayTest 2" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting3/cambio3.png" alt="Cambio 3 - PlayTest 2" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <li style="color:lightblue;">
                Se agregó un componente de instrucciones para el jugador.
                </li>
                <li style="color:lightblue;">
                    Ajustar el posicionamiento de la cámara para que sea más visible la zona del laberinto.
                </li>
                <li style="color:lightblue;">
                Se agregaron textos que indicaban los objetivos de cada nivel.
                </li>
                <li style="color:lightblue;">
                Los generadores cambian de color al momento de ser atacados.
                </li>
            </div>
        </div>
    </section>
    
    
    `;
}
