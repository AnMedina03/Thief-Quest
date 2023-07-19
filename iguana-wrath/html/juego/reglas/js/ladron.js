smallIcon = (nombre, titulo) => `<img src="../../img/reglas/${nombre}" alt="${titulo}" class="small-icon" />`

function thiefRules() {
    const regionContenido = document.getElementById("RulesContainer");

    regionContenido.innerHTML = `
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg thief-title">ANTES DE JUGAR</h4>
    <ol class="text-white w-100">
        <li>
            Los jugadores deberán elegir el orden de turnos de los jugadores del 1 al 5 respectivamente. Por recomendación
            del juego, lanzar los dados para elegir en base los números de mayor a menor, el último jugador debe ser la
            iguana. <i>Por ejemplo:</i> Si hay 3 jugadores, los 2 primeros jugadores serán ladrones y el último, el tercer
            jugador, será la iguana.
            <br><b>[NOTA]:</b> Se recomienda aplicar las reglas de esta sección antes que la sección “<i>ANTES DE JUGAR</i>”
            en el “<i>Manual de la Iguana</i>”.
        </li>
        <li>
            <b>Ronda:</b> significa que todos los jugadores ya han jugado su turno y el jugador de la iguana debe llevar la
            cuenta del número de ronda que van.
        </li>
        <li>
            <b>Cada ladrón</b> ${smallIcon("Imagen1.png","ladrón")} debe lanzar el dado de colores
            ${smallIcon("Imagen2.png","dado de colores")} para saber qué parada va a ser su punto de partida, es decir, de
            donde se va a comenzar a mover.
            <ul style="margin-left: 2rem;">
                <li style="margin-bottom: 0.5rem;">Si sale <b>un color,</b> el ladrón deberá escoger una de las 4 paradas de
                    ese color y colocarse en él.</li>
                <div class="small-pic">
                    <img src="../../img/reglas/Imagen5.png" alt="">
                </div>
                <li style="margin-top: 0.5rem;">Si sale el <b>ícono de la iguana,</b> la <b>iguana</b> va a <b>escoger el
                        color</b> de la parada y el <b>ladrón</b> procederá a <b>elegir la parada</b> de igual forma que el
                    punto anterior, solo que en esta ocasión el jugador de la iguana eligió el color. </li>
                <li>Si sale el <b>ícono de las flechas,</b> deberá volver a lanzar el dado.</li>
            </ul>
        </li>
        <li>Las paradas se cuentan desde el Norte y de ahí se procede a contar a favor de las manecillas del reloj
            [<b>NORTE</b> -> <b>ESTE</b> -> <b>SUR</b> -> <b>OESTE</b>].</li>
    </ol>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg thief-title">PRINCIPAL</h4>
    <ol class="text-white w-100">
        <li>Inicialmente, los ladrones empiezan desde sus puntos de partida en la respectiva parada asignada previamente.
        </li>
        <li>En cada ronda, primero juegan los ladrones en el orden que les corresponden y al final juegan las iguanas.</li>
        <li>Se deben repartir 3 baldosas ${smallIcon("Imagen3.png","baldosa")} para cada jugador y estos no deben
            mostrarlas, salvo que sea requerido (Es decir por una maldición o que se ponga de acuerdo con otro jugador para
            armar una estrategia).</li>
        <li>Al finalizar una RONDA, todos los ladrones reciben una baldosa y debe cumplirse la regla que cada uno debe tener
            solo 3 cartas en la mano. Si tiene una baldosa de más, significa que no ha jugado su turno.</li>
        <li>En caso de que la iguana principal es la que colisiona, entonces los ladrones no tienen opción a defenderse, por
            lo que reciben un Strike de Iguana ${smallIcon("Imagen4.png","Strike de iguana")} y vuelve a su parada inicial.
        </li>
        <li>
            En caso de que una miniiguana alcanza a un ladrón, estos deben lanzar los dados y el de mayor número gana, juega
            primero el ladrón:
            <ul>
                <li>Si la miniiguana <b>gana</b>, el ladrón vuelve a su parada inicial, recibe un <b>Strike de Iguana</b> y
                    esta miniiguana regresa a la puerta del parque.</li>
                <li>Si la miniiguana <b>pierde</b>, esta debe <b>retroceder</b> 3 casillas en la dirección que indique el
                    ladrón ganador.</li>
            </ul>
        </li>
        <li>Si el ladrón tiene 3 Strikes de Iguana, sale de juego y su pieza se coloca en el centro del tablero.</li>
        <li>En caso de que dos ladrones choquen sus caminos, pero ninguno tiene el huevo, el ladrón que choca puede ver las
            cartas del otro y quitarle una baldosa, y la víctima debe escoger una carta del primero sin ver. Si dos
            jugadores chocan a causa de que el jugador en turno puso una baldosa, entonces este jugador elige quien es el
            ladrón que choca y la víctima.</li>
        <li>Si otro ladrón robó antes un huevo ${smallIcon("Imagen6.png","huevo")}, el primero puede robárselo cruzándose
            por su camino (No baldosa). Tras el robo, el nuevo portador del huevo no se verá afectado por otros intentos de
            robo de los demás ladrones por 3 rondas.</li>
    </ol>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg thief-title">MOVIMIENTO</h4>
    <ol class="text-white">
        <li style="margin-bottom: 1rem;">Las líneas dibujadas en las baldosas son caminos y esto sirve para conectar con
            otros caminos con la finalidad de que el ladrón se pueda mover a través del tablero de forma estratégica.</li>
        <div class="small-pic">
            <img src="../../img/reglas/Imagen7.png" alt="Movimiento de ladrón">
        </div>
        <li>
            <p style="color: white;margin-bottom: 0.5rem;">Las baldosas se pueden colocar en la siguiente casilla donde se
                encuentra el ladrón. Si ya existe una baldosa al realizar el movimiento, puede colocarlo al final del camino
                formado si hay espacio. Caso contrario, si no hay espacio para colocar una baldosa, el jugador tiene una de
                las siguientes opciones: </p>
            <ul style="margin-left: 2rem;">
                <li>Cambiar la baldosa siguiente, descartando fuera de campo la que estaba y colocando la suya.</li>
                <li>Al final del camino formado (<b>camino muerto</b>), puede cambiar la siguiente baldosa para continuar el
                    camino, y del mismo modo se descarta la baldosa del campo y se coloca la de la mano.</li>
            </ul>
            <p style="color: white;margin-top: 0.5rem;margin-bottom: 0%;">Al final del turno de un jugador, este debe tener
                2 baldosas en la mano.
                <br>[<b>IMPORTANTE</b>]: Camino escogido, camino seguido. No puede cambiar la ruta una
                vez avanzado en el camino, a excepción de situaciones explicadas más adelante.</p>
        </li>
        <li>Si la baldosa que el jugador del turno coloca tiene un camino que conecta otros caminos con el de un jugador
            cercano a la siguiente baldosa, este también se ve afectado y sigue el camino nuevo que se acaba de formar,
            dañando o beneficiando así la jugada del otro.</li>
    </ol>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg thief-title">EVENTOS</h4>
    <ol class="text-white">
        <li>En caso de que un camino conecte directo al borde del tablero, el ladrón deberá colocarse en la parada más
            cercana. Pero si hay dos paradas cercanas a sus lados, el jugador decide en qué parada se va a colocar.</li>
        <li>Existe la situación de que un jugador puede colocar una casilla que lleve a otro jugador a la casilla del
        parque, por lo tanto, la “<i>víctima</i>” de este evento solo puede escoger otro camino, en el mismo turno que fue
        afectado, por el cual continuar que no involucre el camino que lleva a la casilla roja ni por el camino en el que
        estaba antes del desplazamiento. Caso contrario, se cumple la regla “<i>Movimientos-3</i>”.
        </li>
        <div class="small-pic">
            <img src="../../img/reglas/Imagen8.png" alt="Caso borde del parque">
        </div>
        <li>Si llega a las casillas del parque por su propia cuenta donde no está la puerta para robar el huevo, entonces se
            coloca en la siguiente casilla (<b>casilla del parque</b> ${smallIcon("Imagen9.png","Casilla del parque")}) y
            desde ahí puede cambiar de baldosa o de camino en la última casilla que estuvo. Pero, si hay jugadores y estos
            no chocan con la casilla del parque, ellos solo deben seguir el nuevo camino formado; caso contrario, se cumple
            la regla anterior.</li>
        <li>Si el <b>jugador de la Iguana</b> se olvida de mover una iguana o de invocar una, este no tendrá derecho a
            reclamo debido a que estuvo despistado, a excepción de que esta se encuentre en la puerta del parque.</li>
        <li>Si hay una <b>miniiguana</b> en la <b>puerta del parque</b> ${smallIcon("Imagen10.png","Puerta del parque")}
            durante varias rondas y los ladrones lo notan, se sancionará al jugador con perder 1 turno por cada ronda que
            permanezca en la puerta.</li>
    </ol>
    `;
}