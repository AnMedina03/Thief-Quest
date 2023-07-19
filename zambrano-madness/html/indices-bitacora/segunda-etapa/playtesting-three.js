const seccionNueve = document.getElementById("TipoI9");
seccionNueve.addEventListener('click', puntoCII);

function puntoCII(){
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
                Para el Playtesting 3 se empleó el siguiente tablero de juego con los siguientes elementos empleados en las fotos:
                </p>
            </div>
            <div class="fx-display fx-col fx-nwp gp-1">
                <img src="../img/pruebas/playtesting-tri/Imagen2.jpg" alt="Foto general de prueba" class="playtesting-element">
                <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-two/Imagen1.png" alt="Manual v3" class="playtesting-element-1">
                <img src="../img/pruebas/playtesting-two/Imagen5.jpg" alt="Manuales según Roles v2" class="playtesting-element-1">
                <img src="../img/pruebas/playtesting-tri/Imagen1.png" alt="Elementos v3" class="playtesting-element-1">
                <img src="../img/pruebas/playtesting-tri/Imagen3.png" alt="Tablero v3" class="playtesting-element-1">
                <img src="../img/pruebas/playtesting-two/Imagen4.jpg" alt="Flujo de Juego v1" class="playtesting-element-1">
                </div>
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                    Se utilizó el tablero de juego con un nuevo diseño formado con 12 horas A4, dicho tablero contenía la ubicación de las paradas ubicadas
                    en los extremos del tablero pero con un ícono representativo para indicar que por ahí no se sale pero que ahí se coloca la parada, de
                    modo que las reglas servirían únicamente para explicar cómo ubicar las paradas.
                    El resto de elementos para jugar son los mismos.
                    </p>
                </div>    
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-tri/playtesting3-prueba1.jpg" alt="Prueba 1 - Escena 1" class="foto-playtesting-1">
                <img src="../img/pruebas/playtesting-tri/playtesting3-prueba2.jpg" alt="Prueba 1 - Escena 1" class="foto-playtesting-1">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:lightblue;">
                    Esta vez no hubo mucho problema al realizar la asignación de roles y cómo ubicar los jugadores, pero si hubo problema durante la partida.
                    <li>
                        Ocurrió que un ladrón, luego de colisionar con otro y hacer efecto el intercambio de baldosas, quedaban uno encima de otro, moviéndose
                        de un lado a otro juntos.
                    </li>
                    <li>
                        Se identifico un EVENTO que no tiene regla, por ende es confuso de resolver durante el juego. Este evento consistía en que pasa si dos
                        o más ladrones se encuentran con la iguana legendaria o una miniiguana.
                    </li>
                    <li>
                        Los manuales tenían mucho texto para leer por lo que los usuarios les daba pereza volver a leer y no quisieron usar el flujo de juego. 
                    </li>
                </p>
            </div>
            <br>
            <h3 class="text-white title-bg thief-title">Retroalimentación y Cambios</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Analizando los puntos mencionados en la sección anterior, se decidió agregar una nueva regla para resolver ese evento e identificar
                        futuros problemas que esa regla pueda traer. También toca resumir más las reglas para que los manuales no se vean muy extensos.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    
    `;
}
