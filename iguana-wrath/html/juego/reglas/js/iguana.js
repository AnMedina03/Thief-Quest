function iguanaRules() {
    const regionContenido = document.getElementById("RulesContainer");

    regionContenido.innerHTML = `
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg iguana-title">ANTES DE JUGAR</h4>
    <ol class="text-white w-100">
        <li>
        Los jugadores deberán elegir el orden de turnos de los jugadores del 1 al 5 respectivamente. Por recomendación del juego, lanzar los dados para elegir en base los números de mayor a menor, el último jugador debe ser la iguana. 
        <i>Por ejemplo:</i> Si hay 3 jugadores, los 2 primeros jugadores serán ladrones y el último, el tercer jugador, será la iguana. 
            <br><b>[NOTA]:</b> Se recomienda aplicar las reglas de la sección <i>“ANTES DE JUGAR”</i> en el “Manual del Ladrón” para aplicar las de esta sección.
        </li>
        <li>
            <b>Ronda:</b> significa que todos los jugadores ya han jugado su turno y el jugador de la iguana debe llevar la cuenta del número de ronda que van.
        </li>
        <li>
        <b>El jugador de la iguana</b> lanza un dado de 6 caras para conocer el <b>número de paradas</b> que van a estar disponibles para el escape de los ladrones.
        </li>
        <li>
            Luego lanza el <b>dado de colores</b> ${smallIcon("Imagen2.png","dado de colores")} y según el color que se indique, la <b>iguana debe elegir</b> en cuál de las 4 paradas ${smallIcon("paradaSmol.png","miniParada")} de ese color desea colocar el paradero ${smallIcon("parada.png","parada")}: 
            <ul style="margin-left: 2rem;">
                <div class="small-pic">
                    <img src="../../img/reglas/Imagen5.png" alt="">
                </div>
                <li style="margin-top: 0.5rem;">Si las 4 paradas están ocupadas deberá volver a lanzar el dado para elegir otro color.</li>
                <li style="margin-top: 0.5rem;"> "Si el lado del dado es el ícono de las flechas ${smallIcon("repeat.png","repeat")}, significa que vuelve a tirar.</li>
                <li style="margin-top: 0.5rem;">Por otro lado, si es el ícono de la iguana ${smallIcon("iguanaYell.png","repeat")} , él elige libremente que parada quiere que se habilite.</li>
            </ul>
            <b>[IMPORTANTE]</b>: Todas las <b>fichas de paradas disponibles</b> deben ser colocadas al inicio.
        </li>
        <li style="margin-top: 1rem;">
            Ahora falta la <b>ficha de la puerta</b> por donde los ladrones deben entrar para robar el huevo y las iguanas deben salir. Para esto, el jugador de la iguana debe lanzar el <b>dado 1-2-3</b> ${smallIcon("triguana.png","dado de colores")} para saber en qué fila y columna debe colocar la puerta.
            <div class="small-pic">
                <img src="../../img/reglas/tabla.png" alt="" style="margin-left: 12.5rem;">
            </div>
            El <b>primer número</b> indica en que <b>fila</b> debe ir y cuando se <b>vuelva a lanzar</b> el dado, sería la <b>columna</b>. Si la coordenada resultante queda justo en el <b>centro (C)</b>, entonces el jugador de la iguana puede <b>elegir</b> en que posición va la puerta. Se coloca un miniiguana inicial en la puerta.
        </li>
        <li>
            Una vez ubicada la puerta, <b>3 casillas</b> ${smallIcon("casilla.png","dado de colores")} antes se <b>coloca la iguana principal</b> ${smallIcon("iguana.png","dado de colores")}. Este jugador elige si se coloca 3 casillas a la derecha o a la izquierda, lo que importa es que debe estar en las baldosas en rojo.
        </li>
        <li>
            <b>Una miniiguana</b> ${smallIcon("miniiguana.png","dado de colores")} , por defecto, se encuentra en la <b>puerta del parque</b> ${smallIcon("Imagen10.png","dado de colores")} , el cual es su punto de partida.
        </li>
    </ol>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg iguana-title">PRINCIPAL</h4>
    <ol class="text-white">
        <li>Inicialmente, solo puede mover a la <b>miniiguana</b> ${smallIcon("miniiguana.png","dado de colores")} , la iguana principal se encuentra reposando en su casilla inicial.</li>
        <li>La iguana debe <b>llevar la cuenta</b> del número de rondas transcurridos y el número de strikes que lleva cada jugador. Para esto puede usar la plantilla que se encuentra al final de este manual o en la web.</li>
        <li>En cada ronda, primero juegan los ladrones en el orden que les corresponden y al final juegan las iguanas.</li>
        <li>Para ganar, todos los ladrones deben haber recibido <b>3 Strikes de Iguana</b> ${smallIcon("Imagen4.png","dado de colores")} .</li>
        <li>En caso de que la iguana principal es la que colisiona, entonces los ladrones no tienen opción a defenderse, por lo que reciben un <b>Strike de Iguana</b> y vuelve a su <b>parada inicial</b>.</li>
        <li>
            En caso de que una miniiguana alcanza a un ladrón, estos deben lanzar los dados y el de mayor número gana, juega primero el ladrón:
            <ul style="margin-left: 2rem;">
                <li style="margin-top: 0.5rem;">
                    Si la miniiguana <b>gana</b>, el ladrón vuelve a su parada inicial, recibe un <b>Strike de Iguana</b> y esta miniiguana regresa a la puerta del parque.
                </li>
                <li style="margin-top: 0.5rem;">
                    Si la miniiguana <b>pierde</b>, esta debe <b>retroceder</b> 3 casillas en la dirección que indique el ladrón ganador.
                </li>
            </ul>
        </li>
        <li>
            Por cada jugador chocado por primera vez, se invoca una miniiguana en la puerta para continuar la persecución. Si un jugador tiene el huevo, este último regresa al parque.
        </li>
        <li>
            Cuando el huevo es robado, la iguana comenzará a moverse y al finalizar cada ronda los 3 ladrones deben lanzar los dados, el de menor número recibe el efecto de una carta maldición.<br>
            <b>[NOTA]:</b> La iguana debe estar atento para aplicar esta regla.    
        </li>
        <li>
            Las iguanas no pueden entrar en las paradas, pero pueden esperar afuera.
        </li>
    </ol>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg iguana-title">MOVIMIENTO</h4>
    <ol class="text-white">
        <li>El jugador de la iguana lanza el dado 123 ${smallIcon("triguana.png","dado de colores")} para mover todas las iguanas en el campo para alcanzar a los ladrones. </li>
        <li>La iguana legendaria y las miniiguanas se pueden mover una <b>casilla en vertical u horizontal</b>, NO diagonal, independientemente si hay una baldosa de ladrón o no.</li>
        <li>Ninguna miniiguana se puede quedar en la puerta, debe moverse.</li>
        <li>La iguana legendaria no podrá moverse ni tendrá efecto negativo contra los ladrones hasta que pase una ronda luego de que el huevo haya sido robado.</li> 
        <div class="small-pic">
                <img src="../../img/reglas/moviguana.png" alt="" style="margin-top: 1rem;">
        </div>
        <li>Ni la <b>iguana</b> ni las <b>miniiguanas</b> pueden cruzar a través de las <b>casillas del parque</b> ${smallIcon("casilla.png","dado de colores")} una vez hayan salido de la <b>puerta</b>.</li>
        <li>No pueden entrar a una parada ${smallIcon("paradaSmol.png","dado de colores")} para esperar, deben avanzar los pasos que le corresponde.</li>
    </ol>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg iguana-title">EVENTOS</h4>
    <ol class="text-white">
        <li>
            Si en el camino de una iguana se encuentra una baldosa de ladrón:
            <ul style="margin-left: 2rem;">
                <li style="margin-top: 0.5rem;">
                    Si un ladrón se encuentra en dicha baldosa durante el turno, se enfrenta al jugador como se indica la regla Principal.
                </li>
                <li style="margin-top: 0.5rem;">
                    Si no se encuentra ningún jugador durante el turno, se descarta la baldosa.
                </li>
            </ul>
        </li>
        <li>
            Si pasan 10 rondas y nadie ha robado el huevo, este paso se repite para reubicar la puerta.
        </li>
        <li>
            En caso de que un ladrón le toque moverse debido a la nueva casilla que otro jugador ha colocado y pase por la casilla donde se encuentre una iguana o miniiguana, estos (iguana y ladrón) tendrán que enfrentarse.
        </li>
        <li>
            Si el jugador de la Iguana se olvida de mover una iguana o de invocar una, este no tendrá derecho a reclamo debido a que estuvo despistado, a excepción de que esta se encuentre en la puerta del parque.
        </li>
        <li>
            Si hay una miniiguana en la puerta del parque durante varias rondas y los ladrones lo notan, se sancionará al jugador con perder 1 turno por cada ronda que permanezca en la puerta.
        </li>
    </ol>
    `;
}