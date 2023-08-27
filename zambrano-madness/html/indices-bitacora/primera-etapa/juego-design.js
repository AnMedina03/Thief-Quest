const seccionCuatro = document.getElementById("TipoI4");
seccionCuatro.addEventListener('click', puntoD);

function puntoD(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Diseño de Juego</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            
            <div class="fx-display fx-col gp-1">
                <img src="../../../../../img/thief-quest-saga-logo.png" alt="Logo Thief's Quest: Zambrano's Madness" class="choosed-game-style">
                <h2 class="text-white title-bg text-align-center">Thief's Quest: Zambrano's Madness</h2>
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">Diseño de entorno y personajes</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white; text-align: justify;">
                    Durante la concepción de "Zambrano's Madness" la idea fue realizar una mezcla de tecnologías 2D y 3D:  
                    <li style="text-align:justify">
                        <b>2D<b>: El uso del 2D fue destinado al diseño de los personajes y a ciertos objetos del entorno (como armas del ladrón y objetos que deben ser destruidos para
                        avanzar un nivel) por medio del uso de arte pixelado (Pixel Art).
                    </li>
                    <li style="text-align:justify">
                        <b>3D<b>: El uso del 3D fue destinado al diseño y modelado del entorno de los diferentes niveles que debe cruzar el jugador (principalmente edificios, estructuras de muros,
                        y elementos del entorno del jugador. 
                    </li>
                    </p>
                    <p style="color:white; text-align: justify;">
                    Un juego que puede representar en ciertos aspectos lo que se deseó plantear fueron las ediciones de Pokémon: Diamante y Perla para Nintendo DS. Dichos juegos emplean pixel art (2D) para
                    el diseño de los jugadores y los Pokémon, mientras que emplean a su vez ciertos objetos 3D para constituir el entorno del jugador.
                    </p>
                    <div style="display: flex;justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/3D_Pokemon.png" class="inspiracion-portada">  
                        <img src="../../img/diseño_juego_digital/2D_Pokemon.png" class="inspiracion-portada">  
                    </div>
                    <p style="color:white; text-align: justify;">
                    Para aplicarlo dentro del juego se aplicó una lógica similar: Personajes en pixel art y entorno modelado con objetos 3D
                    </p>
                    <div style="display: flex;justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/Modelado_2D_3D.png">  
                    </div>
                </div>  
                
            </div>
            
            <br>
            <h3 class="text-white title-bg iguana-title">Objetivo del Juego</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    Como se mencionó en la sección "Historia de Zambrano's Madness", un científico capturo a la iguana legendaria y experimentó con ella para sembrar
                    el caos en la ciudad. La misión del jugador (en este caso el "ladrón") es derrotar al Dr. Zambrano y a sus iguanas modificadas para salvar a la ciudad.
                    El Dr.Zambrano se encuentra resguardado en una catedral en el centro de la ciudad, la cual solo puede accederse al hallar 4 llaves/insignias que le permitan al ladrón 
                    entrar. Para conseguir abrir la catedrál, el jugador deberá emprender un viaje por 4 sectores de la ciudad de Guayaquil:
                    <li style="text-align:justify">
                        El Estadio Capwell
                    </li>
                    <li style="text-align:justify">
                        La isla Trinitaria
                    </li>
                    <li style="text-align:justify">
                       El Estero Salado
                    </li>
                    <li style="text-align:justify">
                       El Parque Samanes
                    </li>
                    </p>
                    <div style="display: flex;justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/Objetivo_01.png">  
                    </div>
                    <p style="color:lightblue;">
                    Cada uno de los sectores comprenderá 3 zonas: En las primeras 2 zonas el jugador deberá enfrentarse con un arma equipada por defecto a una serie de enemigos  que aparecerán a lo largo del mapa
                    a la par que deberá cumplir una determinado tipo de desafío/misión para avanzar al siguiente nivel. Durante el recorrido el jugador deberá hallar un objeto/arma especial que
                    le permitirá facilitar su avance. A su vez, el jugador podrá mejorar su arma por defecto para que esta sea más poderosa. Al llegar a la 3era zona, el jugador deberá enfrentarse a un jefe especial de la zona,
                    el cuál deberá derrotar para adquirir la llave correspondiente.
                    <div style="display: flex;justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/Objetivo_03.png">  
                    </div>
                    <p style="color:lightblue;">
                    Conseguidas las llaves, solo resta una última misión: Entrar a la catedrál y detener al Dr. Zambrano de una vez por todas !
                    </p>
                </div>
            </div>
            <br>
            
            <h3 class="text-white title-bg iguana-title">Personajes y Objetos</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    En este caso los personajes se pueden dividir entre "el ladrón" y "los enemigos".Ambos grupos diseñados con pixel art.
                    <li style="text-align:justify">
                        Ladrón: Personaje principal. Se pensó en que su apariencia fuera similar a la de una persona normal, acompañada de un arma
                        común como una daga (la Daga Barcelona) acompañado de un sombrero que le ayude a que no puedan identificarlo facilmente.
                        Podrá hallar armas legendarias a lo largo de su travesia para superar los desafíos que encuentre en el camino. 
                    </li>
                    <br>
                    <div style="display: flex; justify-content: space-evenly;">
                        <img src="../../img/diseño_juego_digital/Ladron.png" class="inspiracion-portada">  
                        <img src="../../img/diseño_juego_digital/Openheimer_v2.png" class="inspiracion-portada">  
                    </div>
                    <br>
                    <li style="text-align:justify">
                        Enemigos: Principal impedimento del ladrón y su misión de derrotar a Zambrano. Basados en la idea de que el Dr. Zambrano modifique a las iguanas,
                        se consideró que lo más común fuera que además de las Iguanas -que actuarían como jefes- otros animales como lagartos, murciélagos, etc. fueran pequeños 
                        enemigos que buscarían hacerle daño al jugador. Su función sería similar a la de los "Goombas" y "Koopas" del juego "Super Mario Bros.". Respecto a las Iguanas, se pensó que 
                        cada una de las iguanas que protege un zona tenga un poder específico para que cada jefe tenga una mecánica distinta al momento de combatirlas. 
                        Por ejemplo:
                        <li style="text-align:justify">
                            Iguana - Capwell: Poderes eléctricos
                        </li>
                        <li style="text-align:justify">
                            Iguana - Trinitaria: Poderes de fuego
                        </li>
                        <li style="text-align:justify">
                            Iguana - Estero: Poderes de agua
                        </li>
                        <li style="text-align:justify">
                            Iguana - Parque Samanes: Poderes de tierra
                        </li>
                    </li>
                    <div style="display: flex; justify-content: space-evenly;">
                    <img src="../../img/diseño_juego_digital/Bat.png" class="inspiracion-portada">  
                    <img src="../../img/diseño_juego_digital/ElectroIguana.png" class="inspiracion-portada">  
                    </div>
                    
                    </p>
                </div>
            </div>
            <br>
            
            <h3 class="text-white title-bg iguana-title">Mapa</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    Dentro de cada zona del mapa el jugador deberá completar una misión puntual para avanzar hasta la siguiente y zona y así llegar a donde está 
                    la iguana de dicho sector. Por ejemplo, destruir una determinada cantidad de generadores eléctricos para abrir una puerta. A su vez a medida que avanza en el mapa irán apareciendo 
                    enemigos de manera aleatoria, los cuales solo podrán ser visibles si el cono de visión amarillo del jugador lo apunta directamente -esto solo aplica para los enemigos pequeños como los
                    murciélagos-. De esta forma la complejidad del juego aumentaría al tener que estar pendiente de poder ver a los enemigos dentro de su rango de visión y evitar que le hagan daño.
                    <div style="display: flex; justify-content: space-evenly;">
                    <img src="../../img/diseño_juego_digital/Mapa01.png">  
                    </div> 
                    <br>
                    <div style="display: flex; justify-content: space-evenly;">
                    <img src="../../img/diseño_juego_digital/Mapa02.png">  
                    </div> 
                    </p>
                </div>
            </div>
            <br>
            
        </div>
    </section>    
    `;
}