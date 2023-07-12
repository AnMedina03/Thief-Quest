const seccionCuatro = document.getElementById("TipoI4");
seccionCuatro.addEventListener('click', puntoD);

function puntoD(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Idea Seleccionada</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            
            <div class="fx-display fx-col gp-1">
                <img src="../img/LogoGame.png" alt="Logo Thief's Quest: Iguana's Wrath" class="choosed-game-style">
                <h2 class="text-white title-bg text-align-center">Thief's Quest: Iguana's Wrath</h2>
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">Historia</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white;">
                    Dos o más ladrones buscan robar el valioso huevo de una iguana legendaria y salir del
                    bosque escondido con vida a través de caminos que ellos mismos van formando. Lo que no saben
                    es que… al hacerlo, la iguana va a despertarse enojada y decidirá cobrar venganza contra ellos
                    para recuperar su huevo.
                    </p>
                </div>    
            </div>
            <br>
            
            <h3 class="text-white title-bg iguana-title">Objetivo</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    El ladrón tiene por objetivo robar el huevo de la iguana legendaria, ubicada en el centro, y
                    escapar por una de las paradas disponibles usando los caminos formados en el campo.
                    </p>
                </div>
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">¿Por qué este juego?</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white;">
                        Consideramos que este juego tiene un dinámica fuera de lo común, muy aparte del juego de dados o moverse tras ganar un batalla, pues estamos hablando de caminos que
                        se van formando conforme vamos colocando las baldosas en el tablero. Sentimos que el suspenso de ser perseguidos por otro jugador que se puede mover relativamente
                        más rápido que los demás genera un toque de diversión y entretenimiento.
                        Además de haberlo desarrollado en base un contexto propio de Guayaquil, es decir usar el Parque de las Iguanas como punto céntrico donde se encuentra la iguana
                        legendaria y el huevo dorado y las paradas de buses.
                    </p>
                    <img src="indices-bitacora/primera-etapa/idea-seleccionada/parque-de-las-iguanas.jpg" alt="Parque de las iguanas" class="inspiracion-portada">
                </div> 
            </div>   
            <br>

            <h3 class="text-white title-bg iguana-title">Inspiración</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                        Por supuesto, el juego no nació solamente a base a lluvia de ideas ni tampoco que se han creado mecánicas de juego. Anteriormente, nosotros hemos 
                        tenido la oportunidad de probar dos juegos que nos ayudaron a desarrollar este debido a que son llamativos y fuera de lo común, los cuáles son:
                    </p>
                    <li>
                        Tsuro: Un juego que consiste en mover una piezas de colores (dragones) usando una fichas que tienen lineas que van formando caminos conforme las va colocando, 
                        de modo que los otros juegadores también pueden ser afectados si la nueva ficha recién colocada forma camino a otros jugadores aparte del que está
                        en turno. Gana, o ganan en caso de darse el caso, aquel(los) que sobrevivan al final y pierden los que chocan contra otros jugadores o llegan al 
                        borde del tablero.
                        <br>
                        En base lo dicho, la parte que más nos llamó la atención fue la movilidad de los dragones ya que no usan los típicos dados.
                    </li>
                    <img src="indices-bitacora/primera-etapa/idea-seleccionada/tsuro.png" alt="Tablero de tsuro" class="inspiracion-portada">
                    <li>
                        Munchkin: Un juego de mesa en el que los jugadores asumen el papel de aventureros intrépidos que exploran mazmorras, luchan contra 
                        monstruos y saquean tesoros. El objetivo del juego es llegar al nivel 10 antes que los demás jugadores, adquiriendo puntos de nivel al 
                        derrotar monstruos y superar desafíos.
                        <br>
                        De este juego sacamos la mecánica de escape al enfrentarse a un monstruo en el cual el jugador debe tirar un dado y sacar 5 o 6 para poder lograrlo,
                        caso contrario pierde.
                    </li>
                    <img src="indices-bitacora/primera-etapa/idea-seleccionada/munchkin.jpg" alt="Tablero de tsuro" class="inspiracion-portada">
                </div>
            </div>
        </div>
    </section>    
    `;
}