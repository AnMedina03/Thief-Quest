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
        <h2 class="titulo-seleccionado">PlayTesting 1</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg thief-title">Elementos</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:white;">Detalle de elementos usados:</p>
                <p style="color:lightblue;">
                Para el Playtesting 1 se empleó el siguiente tablero de juego con los siguientes elementos empleados en las fotos:
                </p>
            </div>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-one/Imagen4.png" alt="Manual v2" class="playtesting-element">
                <img src="../img/pruebas/playtesting-one/Imagen5.png" alt="Elementos v1" class="playtesting-element">
                <img src="../img/pruebas/playtesting-zero/Imagen3.png" alt="Tablero v1" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                    Se utilizó el tablero de juego con el mismo diseño formado con 6 hojas A4, dicho tablero contenía la ubicación de las paradas ubicadas en los extremos del tablero,
                    con una clara diferencia de que ahora el tablero se lo imprimió con el color que es para reconocer cada palabra. A su vez, se tenían un conjunto de baldosas
                    con los caminos trazados para indicar la movilidad de los jugadores, estas fichas ya eran más grandes, un tamaño fijo de 3.4cm. Por otro lado, respecto a las fichas
                    de cada jugador (ladrones e iguanas), el huevo, las paradas y la puerta estas ya tuvieron un diseño fijo para representarse y te los hizo con papel y cinta.
                    Por otro lado, se tuvo una serie de cartas impresas que representaron las maldiciones, con un diseño en la parte posterior así como también se imprimió una
                    primera versión oficial del manual de reglas para que los jugadores puedan entender el juego, ya sea el movimiento o las interacciones de los jugadores según su rol
                    ladrones y de las iguanas.
                    </p>
                </div>    
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-one/playtesting1-prueba1-1.jpeg" alt="Prueba 2 - Escena 1" class="foto-playtesting-1">
                <img src="../img/pruebas/playtesting-one/playtesting1-prueba1-2.jpeg" alt="Prueba 2 - Escena 2" class="foto-playtesting-1">
                <img src="../img/pruebas/playtesting-one/playtesting1-prueba2-1.jpg" alt="Prueba 1 - Escena 1" class="foto-playtesting-1">
                <img src="../img/pruebas/playtesting-one/playtesting1-prueba2-2.jpg" alt="Prueba 1 - Escena 2" class="foto-playtesting-1">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        <li>
                            En ambas prubas durante el playtesting, los jugadores tenían problemas principalmente al recién ubicar las piezas de juego, es decir,
                            no sabían donde ubicar los ladrones y las iguanas en el tablero. Tampoco sabían donde ubicar las paradas y que todas se tenían que
                            colocar en el mismo momento (respetando la regla para ubicar la parada).
                        </li>
                        <li>
                            Por otro lado, apareció el problema principal de que, una vez ya lanzado los dados y escogidos los roles, los jugadores con el rol de
                            ladrón demoraron en leer el manual para el ladrón pero la iguana tenía que esperar hasta que ellos terminen de leer para recién saber
                            sus reglas.
                        </li>
                        <li>
                            Durante la partida, los ladrones no sabían la funcionalidad de los caminos, habían caminos mezclados y no sabían cual apuntaba a cual y
                            en una prueba uno de los jugadores pensaba que en medio de las líneas, se formaban un camino.
                        </li>
                    </p>
                </div>    
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Retroalimentación y Cambios</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Observando los problemas con participantes externos, decidimos cambiar el diseño del tablero, enfocando más la casilla para colocar las paradas
                        y también se entienda donde y cómo ubicar el punto de partida (parada inicial) de los ladrones. Además, se cambiaron las reglas para que sean
                        claras y dinámicas, para esto último se colocaron íconos para representar los elementos a los que se hacían referencia. Por último pero no
                        menos importante, respecto a las baldosas, se lo hizo de manera digital y se les colocó con 2 diferentes colores para que se puedan diferenciar
                        los caminos mezclados.
                    </p>
                </div>
            </div>
            <br>
            <h4 class="text-white subtitle-bg iguana-title">Reunión en Equipo [3]</h4>
            <div class="fx-display fx-fil gp-1 fx-wp linea" style="padding: 1rem;">

                ${videoFormato("https://www.youtube.com/embed/UEm6jplkR_c")}

            </div>
            <br>
        </div>
    </section>
    
    
    `;
}
