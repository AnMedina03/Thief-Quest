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
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white;">Detalle de elementos usados:</p>
                    <p style="color:lightblue;">
                    Para el Playtesting Zero se empleó el siguiente tablero de juego con los siguientes elementos empleados en las fotos:
                    </p>
                </div>    
            </div>
            <div style="display: flex;justify-content: center; margin: 1vh;">
                <img src="../img/pruebas/prueba1.jpeg" alt="Tablero v1" width="100" height="105">
            </div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    Se utilizó un tablero de juego formado por 6 horas A4, dicho tablero contenía la ubicación de las paradas ubicadas en los extremos del tablero,
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
            <div></div>
            <br>
            <h3 class="text-white title-bg iguana-title">Retroalimentación y Cambios</h3>
            <div></div>
        </div>
    </section>    
    `;
}