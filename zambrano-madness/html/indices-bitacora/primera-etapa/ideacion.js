const seccionUno = document.getElementById("TipoI1");
seccionUno.addEventListener('click', puntoA);


function puntoA(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Ideación</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            
            <div class="fx-display fx-col gp-1">
                <img src="../../../../../img/thief-quest-saga-logo.png" alt="Logo Thief's Quest: Iguana's Wrath" class="choosed-game-style">
                <h2 class="text-white title-bg text-align-center">Thief's Quest: Zambrano's Madness</h2>
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">Aclaración referente a ideación</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white;">
                   Durante el segundo parcial se encomendó la tarea de realizar un proceso nuevo de ideación para, en base a ello decidir cuál sería la idea
                   base para desarrollar el nuevo juego o bien implementar el juego de mesa del 1er parcial ahora como un videojuego. 
                    </p>
                    <p style="color:lightblue;">
                    La cuestión es que dentro del equipo de trabajo si bien no se optó por implementar el juego de mesa como videojuego, tampoco se hizo un nuevo proceso de
                    ideación de la forma "Sustantivo / Adjetivo / Verbo"; sino que dentro del grupo, a manera de consenso de optó por desarrollar un juego secuela de la saga "Thief's Quest",
                    en donde dicho juego continuase con la historia planteada en "Iguana's Wrath", el juego de mesa.
                    </p>
                    <p style="color:white;">
                    El "proceso de ideación" desarrollado dentro del grupo de trabajo fue el decidir de que forma estaría implementado el juego secuela, puesto que 
                    existían muchas posibilidades para continuar la historia de los ladrones tras su travesía en busca de robar el huevo legendario.
                    </p>
                </div>    
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">Discusión referente al desarrollo</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white;">
                    Frente a las posibilidades de continuar se plantearon diversas ideas para el desarrollo entre las cuales se pueden destacar las siguientes:                   
                    </p>
                    <p style="color:lightblue;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="#212529" class="bi bi-circle-fill" viewBox="0 0 16 16">
						<circle cx="8" cy="8" r="8"/>
					</svg></i>&nbsp;&nbsp; Desarrollar un juego endless runner en donde el ladrón que robó el huevo dorado deba huir de las iguana legendaria a lo largo de la cuidad de Guayaquil,
                    enfrentando diversos obstáculos mientras busca llegar a un vehículo que le permitiese huir fuera de la ciudad.
                    </p>
                    <p style="color:lightblue;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="#212529" class="bi bi-circle-fill" viewBox="0 0 16 16">
						<circle cx="8" cy="8" r="8"/>
					</svg></i>&nbsp;&nbsp; Realizar un juego con enfoque educativo basado en preguntas y respuestas. Dicho juego pondría a los jugadores en un tablero donde
                    deben huir de las iguanas, en donde si el jugador acierta la pregunta este avanza una casilla del tablero alejándose de la iguana pero si este se equivocase,
                    las se acercarían al jugador en busca de comerselo. Así, el último ladrón en pie ganaría
                    </p>
                    <p style="color:lightblue;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="#212529" class="bi bi-circle-fill" viewBox="0 0 16 16">
						<circle cx="8" cy="8" r="8"/>
					</svg></i>&nbsp;&nbsp; Realizar un juego de aventura y combate, en donde el jugador manejaría a un ladrón que debe enfrentarse a una serie de enemigos
                    como bien pueden ser mini-iguanas u otros animales en un mapa a la par que el jugador debe cumplir una determinada misión para avanzar de nivel. En donde, tras
                    pasar determinados niveles el jugador se enfrantaría a un jefe como lo es la Iguana Legendaria para obtener una recompensa.
                    </p>
    
                </div>    
            </div>
            <br>
            
            <h3 class="text-white title-bg iguana-title">Idea Seleccionada</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                    Tras debatir dentro del grupo se optó por adoptar la idea del juego de aventura y combate donde el lagrón enfrentará a una serie de enemigos a lo largo de diversos niveles.
                    </p>
                                
                    <p style="color:lightblue;">
                    Una vez decidida la idea, se optó por comenzar con el diseño de los bocetos del juego así como de una breve historia que conecte con el juego de mesa.
                    Debatiendo el como conectar la historia se planteó la idea de que el videojuego empieze justo donde finalizó el juego de mesa, en donde tras robar el huevo legendario 
                    y huir de la Iguana Legendaria regresando a Guayaquil, esta es capturarada por un científico loco que experimenta con ella en busca de sembrar el caos en la ciudad.
                    Y el ladrón al ver todo el desastre y calamidades ocasionadas decide tomar las riendas del problema y evitar la destrucción total de Guayaquil. 
                    </p>
                
                    <p style="color:lightblue;">
                    El equipo optó por seguir con esa idea y comenzar el desarrollo del segundo juego de la saga "Thief Quest".
                    Y así comenzó el desarrollo de "Zambrano's Madness". 
                    [Nota: Para más información de la historia de "Zambrano's Madness" vea la sección "Historia" dentro de la Bitácora]
                    </p>
                </div>
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">¿Por qué esta dicha idea?</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:white;">
                        Tras desarrollar el primer juego de la saga "Thief's Quest" la idea de seguir explorando el lore y el mundo diseñado fue algo que emocionó al grupo de trabajo.
                        Por lo que la idea de desarrollar el juego de aventura y combate como una secuela permitiría expandir la historia de manera coherente contectandolo con la 
                        historia base contada en el juego de mesa, a la vez que se permitía  ser el punto de partida para conectar y generar vínculos y referencias entre los juegos de la saga "Thief's Quest".
                        
                        <br>

                        A su vez, la posibilidad de que el juego sea enfocado a la aventura y el combate permite muchas posibilidades para situar el mundo dentro del juego
                        a entornos conocidos dentro de Guayaquil más allá del Parque de las Iguanas, como puede ser el Parque Samanes o el Estadio George Capwell de Emelec. 
                        Asimismo, los objetos que el jugador pudiese encontrar dentro de la cuidad para avanzar en la historia podrían ser objetos comunes o tradicionales permitirían al jugador sentirse familiarizado con el 
                        folklore de la ciudad de Guayaquil.
                    </p>
                    <img src="indices-bitacora/primera-etapa/idea-seleccionada/parque-de-las-iguanas.jpg" alt="Parque de las iguanas" class="inspiracion-portada">
                </div> 
            </div>   
            <br>

            <h3 class="text-white title-bg iguana-title">Inspiración</h3>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    <p style="color:lightblue;">
                        Por supuesto, para empezar el desarrollo del juego y poder plasmar las diversas ideas que se tenían en mente fue necesario revisar y buscar mecánicas y elementos presentados en otros juegos,
                        en busca de formar un juego único y divertido que posea mecánicas que permitiesen a cualquier persona jugar y disfrutar el juego:
                        A continuación se mencionarán ciertos juegos con aspectos que se consideraron vitales para el desarrollo de "Zambrano's Madness":
                    </p>
                    <li>
                        Pokémon (Diseño de mundo (elementos y posicionamiento de cámara)
                    </li>
                    <li>
                    Teenage Mutante Ninja Turtles (Avance de nivel)
                    </li>
                    <li>
                    Zombies Ate My Neighbors (Mecánica de juego: combate)
                    </li>
                    <li>
                    OutLast (Misiones y Ambiente de Suspenso)
                    </li>
                    <li>
                    Super Mario 64 (Acceso a mundos)
                    </li>
                    <li>
                    Bomberman 5 (Aparición de enemigos)
                    </li>
                    
                </div>
            </div>
        </div>
    </section> `
}

