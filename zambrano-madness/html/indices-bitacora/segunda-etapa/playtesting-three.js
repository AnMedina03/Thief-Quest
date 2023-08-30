const seccionNueve = document.getElementById("TipoI9");
seccionNueve.addEventListener('click', puntoCII);

function puntoCII(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting 4</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg thief-title">Elementos</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:white;">Detalle de elementos usados:</p>
                <p style="color:lightblue;">
                    Para el Playtesting Four se presentó una versión del juego un poco más desarrollada con los cambios realizados. Esto es una prueba de
                    interacción y el diseño del juego (dibujos, audios, iluminación y mecánica):
                </p>
                <p style="color:lightblue;">
                    <a href="juego/reglas.html">Descarga el juego</a>
                </p>
            </div>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting4/Over.png" alt="Sprites" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting4/Demo.gif" alt="Sprites" class="playtesting-element">
                <img src="../../img/zambrano/PlayTesting4/ItemContainer.png" alt="Sprites" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Se presentó una versión final de la beta del juego en la que se han añadido cambios en base a las tareas planificadas para la
                        cuarta iteración del proyecto y las observaciones del tercer playtesting, cabe destacar que no se han
                        aplicado todos los cambios puesto a que se dieron prioridad a las tareas por cumplir según la planificación,
                        además de que ciertas tareas tomaron más tiempo de lo esperado, por lo que algunas tareas y cambios pendientes
                        pasaron a las siguientes iteraciones.
                        Las tareas para esta iteración eran:
                    </p>
                </div>
                <li style="color:lightblue;">
                Intro del juego integrado al inicio.
                </li>
                <li style="color:lightblue;">
                Pantalla de GameOver.
                </li>
                <li style="color:lightblue;">
                Daño de área por el Oppenheimer Criollo.
                </li>
                <li style="color:lightblue;">
                Cool down a la Daga y al Oppenheimer.
                </li>
                <li style="color:lightblue;">
                Interacción para conseguir el Oppenheimer.
                </li>
                <li style="color:lightblue;">
                Estado del jugador entre escenas.
                </li>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../../img/zambrano/PlayTesting4/PlayTest1.png" alt="Prueba 0 - Escena 1" class="foto-playtesting-h1">
                <img src="../../img/zambrano/PlayTesting4/PlayTest2.png" alt="Prueba 0 - Escena 1" class="foto-playtesting">
            </div>
            <div class="puntos-clave"  style="padding: 1vh; margin: 1vh;">
                <li style="color:lightblue;">
                Menos enemigos por cada spawner y reducir el cool down.
                </li>
                <li style="color:lightblue;">
                Detalles en las transiciones de la escena introductoria del juego.
                </li>
                <li style="color:lightblue;">
                Iconos que corresponden a las armas pueden ser más pequeños.
                </li> 
                <li style="color:lightblue;">
                Exige atención a todo lo que sucede en la batalla con el jefe final.
                </li>
                <div class="linea">
                    <p style="color:lightblue;">
                    <i>Revisar la sección de VIDEOS para más detalles</i>
                    </p>
                </div>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Retroalimentación y Futuros Cambios</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Para una más versión desarrollada del juego se plantea agregar un sistema para recuperar vida, ya sea derrotando enemigos o encontrar puntos
                        para recuperar vida. Otros de los cambios relevantes será incrementar el tamaño del mapa y hacer más dinámico al jefe, además de agregar
                        personajes que puedan dar instrucciones o historia del juego.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    
    `;
}
