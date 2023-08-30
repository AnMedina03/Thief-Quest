const seccionSeis = document.getElementById("TipoI6");
seccionSeis.addEventListener('click', puntoF);

function puntoF(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting 1</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg iguana-title">Elementos</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:white;">Detalle de elementos usados:</p>
                <p style="color:lightblue;">
                    Para el Playtesting One se presentó una versión muy básica del juego puesto a que aún seguía en desarrollo. Esto es una prueba de movimiento y
                    el diseño del juego (dibujos, audios, iluminación y mecánica):
                </p>
                <p style="color:lightblue;">
                    <a href="juego/reglas.html">Descarga el juego</a>
                </p>
            </div>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting1/Recursos.png" alt="Recursos en Unity" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting1/MapaArea.png" alt="Mapa de Areas" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting1/Sprites.png" alt="Sprites" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting1/Generadores.png" alt="Sprites" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting1/Puerta.png" alt="Sprites" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Se presentó una versión del juego en la que el jugador solo podía explorar el mapa creado, escuchar la música de fondo y observar el efecto
                        de oscuridad. Lo mencionado en general son los resultados de las tareas planificadas para la primera iteración del proyecto, los cuáles eran:
                    </p>
                </div>
                <li style="color:lightblue;">
                    Diseño de sprites.
                </li>
                <li style="color:lightblue;">
                    Implementación de sonidos (SFX).
                </li>
                <li style="color:lightblue;">
                    Implementación de música de fondo (BGM).
                </li>
                <li style="color:lightblue;">
                    Movimiento de objetos.
                </li>
                <li style="color:lightblue;">
                Animación de objetos.
                </li>
                <li style="color:lightblue;">
                    Desarrollo de entorno (mapas).
                </li>
                <li style="color:lightblue;">
                Interacción con entorno (colisiones con obstáculos y muros limitantes)
                </li>
                <li style="color:lightblue;">
                    Iluminación de entorno y objetos
                </li>
            </div>
            <br>
            <h3 class="text-white title-bg iguana-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting1/PlayTest1.png" alt="Prueba 0 - Escena 1" class="foto-playtesting">
            </div>
            <div class="puntos-clave"  style="padding: 1vh; margin: 1vh;">
                <li style="color:lightblue;">
                    Se hizo hincapié en el hecho de que debe proporcionarse información de cuantos objetos restantes debe destruir/recolectar.
                </li>
                <li style="color:lightblue;">
                    Se podría implementar rutas alternativas en el laberinto u obstáculos en el mapa.
                </li>
                <li style="color:lightblue;">
                    Aumentar la cantidad de enemigos generados.
                </li> 
                <li style="color:lightblue;">
                    Importante: Los sonidos fueron guía.
                </li> 
                <li style="color:lightblue;">
                    Aspectos adicionales: Revisar posicionamiento de cámara y tamaño/intensidad del foco de la linterna.
                </li>
                <div class="linea">
                    <p style="color:lightblue;">
                    <i>Revisar la sección de VIDEOS para más detalles</i>
                    </p>
                </div>
            </div>
            <br>
            <h3 class="text-white title-bg iguana-title">Retroalimentación y Cambios</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting1/cambio1.png" alt="Cambio 1 - PlayTest 1" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting1/cambio2.png" alt="Cambio 2 - PlayTest 1" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting1/cambio3.png" alt="Cambio 3 - PlayTest 1" class="playtesting-element">
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