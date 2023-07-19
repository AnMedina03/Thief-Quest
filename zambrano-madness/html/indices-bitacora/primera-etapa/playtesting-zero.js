const seccionSeis = document.getElementById("TipoI6");
seccionSeis.addEventListener('click', puntoF);

function puntoF(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">PlayTesting Zero</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            <h3 class="text-white title-bg iguana-title">Elementos</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <p style="color:white;">Detalle de elementos usados:</p>
                <p style="color:lightblue;">
                Para el Playtesting Zero se empleó el siguiente tablero de juego con los siguientes elementos empleados en las fotos:
                </p>
            </div>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-zero/Imagen2.png" alt="Manual v1" class="playtesting-element">
                <img src="../img/pruebas/playtesting-zero/Imagen3.png" alt="Tablero v1" class="playtesting-element">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                    Se utilizó un tablero de juego formado por 6 hojas A4, dicho tablero contenía la ubicación de las paradas ubicadas en los extremos del tablero,
                    todas manejando un mismo color. A su vez, se tenían un conjunto de baldosas con los caminos trazados para indicar la movilidad de los jugadores.
                    Por otro lado, respecto a las fichas de cada jugador (ladrones e iguanas) estas se representaron por medio de papeles enrollados puesto que no se tenía 
                    todavía un diseño fijo para los personajes. Respecto al huevo dorado, se empleó un borrador para representarlo durante la primera versión de las pruebas
                    entre el equipo de trabajo. Por otro lado, se tuvo una serie de cartas impresas que representaron las maldiciones así como también se imprimió una primera versión
                    de las reglas de alrededor de 2 páginas que contenía las reglas del movimiento e interacciones de los jugadores ladrones y de las iguanas.
                    </p>
                </div>    
            </div>
            <br>
            <h3 class="text-white title-bg iguana-title">Problemas Encontrados</h3>
            <div class="fx-display fx-fil fx-wp gp-1">
                <img src="../img/pruebas/playtesting-zero/playtesting0-prueba1.jpeg" alt="Prueba 0 - Escena 1" class="foto-playtesting">
            </div>
            <div class="puntos-clave"  style="padding: 1vh; margin: 1vh;">
                <h5 style="color:var(--prim-ligth);">Primera prueba</h5>
                <li style="color:lightblue;">
                    Con la primera versión de las reglas (antes de lanzarlas a pruebas con usuarios externos), los ladrones no comprendían claramente como llegar a su
                    posición inicial. Estaban mal distribuidos y eran muy ambiguas.
                </li>
                <li style="color:lightblue;">
                    La movilidad de la iguana era "<b>AUTOMÁTICA</b>" pero existían problemas que eso ocurra porque no había algo o alguien específico que la moviera, resultando 
                    en movimientos aleatorios que al final solo permitían que los ladrones pudieran escapar sin problemas y ganar, perdiendo así (la iguana) su relevancia en el juego.
                </li>
                <br>
                <h5 style="color:var(--prim-ligth);">Segunda prueba</h5>
                <li style="color:lightblue;">
                    Ya se tenían armadas las reglas y los personajes, pero aún esas reglas eran suceptibles a cambios debido a que eran demasiado ambigua, a tal punto que nuestro equipo
                    no sabía como reaccionar a ciertos eventos.
                </li>
                <li style="color:lightblue;">
                    Cómo el jugador de la iguana se podía mover y debía esperar a que robaran el huevo para moverse.
                </li>
                <br>
                <h5 style="color:var(--prim-ligth);">Tercera prueba</h5>
                <li style="color:lightblue;">
                    El jugador de la iguana se movía muy lento, ya sea con las miniiguanas o con la iguana legendaria.
                </li>
                <li style="color:lightblue;">
                    Las reglas para el rol de la iguana no eran muy claras.
                </li> 
            </div>
            <br>
            <h3 class="text-white title-bg iguana-title">Retroalimentación y Cambios</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;">
                <div class="linea">
                    <p style="color:lightblue;">
                        Observando los evidentes problemas, agregamos una flecha en la parte superior izquierda del tablero para indicar por donde deben comenzar
                        el conteo de las paradas o de las posiciones de los jugadores, además de ya crear los personajes para comenzar a probar como debía ser.
                        <br>
                        Muy aparte de la parte visual, cambiamos la funcionalidad de la iguana, en vez de que sea un <b>NPC</b>, lo pasamos a que sea un personaje jugable. 
                        Habían partes de las reglas que no eran muy claras y hacían falta agregar otras para poder aclarar muchos puntos, entre esos la jugabilidad del nuevo 
                        personaje de la iguana.
                        <br>
                        Además, se implementaron a los nuevos personajes para el jugador de la iguana, los cuáles son las miniiguanas. Mientras la iguana principal permanece
                        esperando, este jugador podrá mover las miniiguanas para atrapar a los demás jugadores (ladrones).
                    </p>
                </div>
            </div>
        </div>
    </section>
    `;
}