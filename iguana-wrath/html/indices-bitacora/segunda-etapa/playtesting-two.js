const seccionOcho = document.getElementById("TipoI8");
seccionOcho.addEventListener('click', puntoBII);

function puntoBII(){
    const regionContenido = document.getElementById("JavascriptFile");

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
                Para el Playtesting 2 se empleó el siguiente tablero de juego con los siguientes elementos empleados en las fotos:
                </p>
            </div>
            <div class="fx-display fx-col fx-nwp gp-1">
                <img src="../img/pruebas/playtesting-two/playtesting2-prueba.jpeg" alt="Foto general de prueba" class="playtesting-element">
                <div class="fx-display fx-fil fx-wp gp-1">
                    <img src="../img/pruebas/playtesting-two/Imagen1.png" alt="Manual v3" class="playtesting-element-1">
                    <img src="../img/pruebas/playtesting-two/Imagen5.jpg" alt="Manuales según Roles v2" class="playtesting-element-1">
                    <img src="../img/pruebas/playtesting-two/Imagen3.png" alt="Elementos v2" class="playtesting-element-1">
                    <img src="../img/pruebas/playtesting-two/Imagen2.png" alt="Tablero v2" class="playtesting-element-1">
                    <img src="../img/pruebas/playtesting-two/Imagen4.jpg" alt="Flujo de Juego v1" class="playtesting-element-1">
                </div>
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                    Se utilizó el tablero de juego con un nuevo diseño formado con 6 hojas A4, dicho tablero contenía la ubicación de las paradas ubicadas
                    en los extremos del tablero pero con un ícono representativo para indicar que por ahí no se sale pero que ahí se coloca la parada, de
                    modo que las reglas servirían únicamente para explicar cómo ubicar las paradas.
                    El resto de elementos para jugar son los mismos.
                    Se imprimió una segunda versión oficial del manual de reglas para que los jugadores puedan entender el juego pero esta vez según su rol,
                    es decir que cada rol tiene su propio manual, de modo que las reglas son específicas y gráficas para cada uno.
                    </p>
                </div>    
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-two/playtesting2-prueba1.png" alt="Prueba 1 - Escena 1" class="foto-playtesting">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:lightblue;">
                    Esta vez no hubo mucho problema al realizar la asignación de roles y cómo ubicar los jugadores, pero si hubo problema durante la partida.
                    <li>
                        El jugador de la iguana podía seguir a cada rato al ladrón en la mira y ni bien volvía a la parada este ya lo volvía a atacar.
                    </li>
                    <li>
                        Los jugadores no querían usar el flujo de juego porque no se podía apreciar bien (Mal impreso).
                    </li>
                    <li>
                        Los jugadores pensaban que las casillas tachadas del tablero indicaban que no se podían colocar los jugadores
                        y entre otras confusiones durante un largo rato.
                    </li>
                    <li>
                        Los manuales tenían mucho texto para leer por lo que los usuarios les daba pereza volver a leer.
                    </li>
                    <li>
                        Hubo quejas porque no se podían mover mucho porque habían pocas casillas en todos los lados.
                    </li>
                </p>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Retroalimentación y Cambios</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Observando los problemas con participantes externos, se decidió agregar más filas y columnas al tablero, quitar el ícono del
                        bloqueo de la casilla de las paradas y agregar una casilla para que los jugadores sepan por donde comenzar. A los manuales simplemente se
                        les agregó más representaciones gráficas y en el manual de la iguana se le colocó una plantilla para que el jugador con este rol pueda usar
                        y llevar el control del número de las rondas y strikes de cada jugador. También se quitó la versión de archivos de los flujos y se colocó
                        para que se descarguen las imágenes directamente
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    
    `;
}
