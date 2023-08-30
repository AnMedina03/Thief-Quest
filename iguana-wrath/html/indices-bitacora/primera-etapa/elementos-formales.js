const seccionTres = document.getElementById("TipoI3");
seccionTres.addEventListener('click', puntoC);

function puntoC(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Elementos Formales</h2>
    </div>
    
    <div class="bloque-ef">

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Guillermo Veintimilla</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../../img/elementos-formales/EFormal-GV.jpg" alt="elemento_formal">
            </div>

            <div class="puntos-clave">
                <div class="linea">
                    <p style="color:white;">Nombre del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">Bardos al ataque</p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cantidad de duración:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        30 minutos como minimo
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Audiencia del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Para personas mayores de 10 años
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Elementos del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        4 piezas de bardos, 5 piezas de soldados, 1 pieza de rey, 1 dado, 20 cartas especiales, 1 tablero.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Objetivo del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Los bardos deben alcanzar al rey con el fin de atacarlo y acabar con todas sus vidas, ademas de pelear contra soldados del rey.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Reglas más importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Los jugadores deben alcanzar al rey para atacarlo, moviendose solo hacia adelante.
                        El jugador rey puede moverse hacia adelante o hacia atras.
                        El rey tiene 10 vidasa y los bardos 5
                        El rey puede moverse por caminos secretos hacia otras celdas.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Procedimientos importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Los bardos pueden encontrarse con soldados del rey, a los cuales puedn vencer si tienen cartas de ataque.
                        Los bardos pueden conseguir cartas especiales si caen en determinadas baldosas.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cuando ganan los jugadores:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Los jugadores ganan cuando el rey se queda sin vidas.
                    </p>
                </div>
            </div>

        </div>

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Andres Medina</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../../img/elementos-formales/EFormal-AM.jpg" alt="elemento_formal">
            </div>

            <div class="puntos-clave">
                <div class="linea">
                    <p style="color:white;">Nombre del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">Project Wall Destroyer</p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cantidad de duración:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Aproximadamente 1 hora
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Audiencia del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Entre personas de 6 a 60 años
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Elementos del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Un tablero cirular, los bloques para el muro, tarjeta de estatus de cada reino. Las piezas para representar los reinos.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Objetivo del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Conquistar los reinos vecinos y poder armar su propio reino para viviar en paz.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Reglas más importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                    => El dragón debe destruir un reino atacando por un espacio destruido del muro, independientemente de la causa de su destrucción. Una vez terminado el ataque, el territorio ya le pertenece.
                    => Los jugadores pueden subir el nivel de la defensa y de los muros.
                    => Los jugadores deben mover a exploradores de su reino al centro del campo para recolectar recursos y subir de nivel al dragón.
                    => Si el dragón enemigo baja y ataca los obreros, tus recursos pasan ser de él.                    
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Procedimientos importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Inicialmente, todos los jugadores deben colocar sus muros y analizar que estrategia realizar. De ahí juega 1 jugador por ronda, o más jugadores si son más de 5 jugadores, para decidir si baján a explorar o atacar un reino, destruyendo los muros.                  
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cuando ganan los jugadores:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Una vez que el reino de uno de los dragones logre conquistar los otros reinos.
                    </p>
                </div>

            </div>
        </div>

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Diego Arteaga</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../../img/elementos-formales/EFormal-DA.jpg" alt="elemento_formal">
            </div>

            <div class="puntos-clave">
                <div class="linea">
                    <p style="color:white;">Nombre del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">Thiefguana</p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cantidad de duración:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        1 hora aproximadamente 
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Audiencia del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Mayores de 12 años
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Elementos del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Un tablero cirular, los bloques para el muro, tarjeta de estatus de cada reino. Las piezas para representar los reinos.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Objetivo del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Robar el huevo dorado de la iguana legendaria y escapar por una de las paradas de buses.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Reglas más importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Cada jugador se mueve desde su orilla con cualquiera de las losas que tenga en mano.
                    Los turnos se deciden lanzando el dado y en orden descendente de acuerdo al número que le sale a cada jugador.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Procedimientos importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                    De 2 a 4 jugadores escogen una pieza de ladrón y la colocan en cualquier orilla del tablero.
                    Se barajan y se reparten las losas (4 para cada uno)
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cuando ganan los jugadores:</p>
                    <p style="padding-left:3px;color:lightblue;">
                    Cuando un ladrón sale del tablero a través de una de las paradas con el huevo dorado.
                    </p>
                </div>
            </div>

        </div>

        <div class="elemento-formal">
            <div class="bloque-nombre">
                <h4 class="nombre-storyboard">Diego Reyes</h4>
            </div>
            <div class="bloque-imagen-ef">
                <img src="../../img/elementos-formales/EFormal-DR.jpg" alt="elemento_formal">
            </div>

            <div class="puntos-clave">
                <div class="linea">
                    <p style="color:white;">Nombre del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">Create your armor</p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cantidad de duración:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        30 min (mínimo)
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Audiencia del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Gente de 12 años en adelante
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Elementos del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Tablero de juego, fichas de jugadores (pequeñas almas), cartas (luz, oscuridad, monstruos), 2 dados 1-6, fichas de contador de miedo, fichas de equipamiento (espada/escudo, casco y armadura)
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Objetivo del juego:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Cruzar el tablero eligiendo uno de 3 caminos con una ficha de las almas, enfrentado monstruos y fortaleciéndolas creando una armadura poderosa hasta llegar al castillo y derrotar al dragón de la oscuridad para liberar al pueblo.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Reglas más importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Cada jugador debe comenzar en un camino distinto, Para derrotar a los monstruos tu poder de combate debe ser superior, Los contadores de miedo y maldiciones reducirán tu poder en el próximo combate.  Puedes activar cartas de luz durante el combate y cartas maldición para detener el avance rival.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Procedimientos importantes:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        En función de la casilla donde cae, se le dará una carta (luz, oscuridad, monstruo); Es imperativo derrotar al monstruo para avanzar sin problemas -caso contrario se te asigna un contador de miedo-. Con 3 contadores de miedo, vuelves a una casilla checkpoint y pierdes partes de tu armadura.
                    </p>
                </div>
                <div class="linea">
                    <p style="color:white;">Cuando ganan los jugadores:</p>
                    <p style="padding-left:3px;color:lightblue;">
                        Cuando un jugador al enfrentarse al dragón posea un poder de combate (efectos de cartas y equipamiento) más grande que el poder del dragón, permitiéndole derrotarlo y ganar la partida.
                    </p>
                </div>
            
            </div>


        </div>

    </div>
    
    
    
    
    
    
    
    `;
}