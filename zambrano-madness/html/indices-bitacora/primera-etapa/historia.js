const seccionTres = document.getElementById("TipoI3");
seccionTres.addEventListener('click', puntoC);


function puntoC(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Historia</h2>
    </div>
    
    
    <section class="game-author-section">
        <div class="container">
            
            <div class="fx-display fx-col gp-1">
                <img src="../../../../../img/thief-quest-saga-logo.png" alt="Logo Thief's Quest: Iguana's Wrath" class="choosed-game-style">
                <h2 class="text-white title-bg text-align-center">Thief's Quest: Zambrano's Madness</h2>
            </div>
            <br>

            <h3 class="text-white title-bg iguana-title">Zambrano's Madness (versión 1)</h3>
            <div>
            <div class="puntos-clave" style="padding: 1vh; margin: 1vh;>
                <div class="linea">
                    
                    <p style="color:lightblue;">
                    Se cuenta la historia de un ladrón que había venido con el huevo dorado de una iguana legendaria desde otra dimensión. Sin embargo, el ladrón no contaba con que había un científico loco que tenía planes nefastos para controlar a las iguanas y usarlas para dominar la ciudad de Guayaquil. El científico logró tomar el control de la iguana legendaria y de sus crías, consolidando su poder sobre ellas y sembrando el caos en la ciudad.
                    </p>
                    <p style="color:lightblue;">
                    El ladrón, deseando poner fin a la amenaza del científico y proteger a Guayaquil, intentó llegar a un acuerdo con él, ofreciéndole el huevo dorado como un intento de negociación. No obstante, sus esfuerzos fueron en vano, ya que el científico, bajo el alias de Zambrano, rechazó la oferta y, en un acto de desprecio, arrebató el huevo dorado de las manos del ladrón.
                    </p>
                    <p style="color:lightblue;">
                    
                    Despojado de su tesoro y expulsado de la catedral de Guayaquil, que servía como la guarida del científico, el ladrón se vio obligado a embarcarse en una misión ardua. Ahora, su única esperanza de derrotar al científico loco y liberar a las iguanas de su control malévolo era recolectar trofeos valiosos de distintos puntos de la ciudad. Con cada trofeo que obtenía, el ladrón se volvía más fuerte y adquiría nuevas habilidades para enfrentar al siniestro científico.
                    </p>
                    <p style="color:lightblue;">
                    Así, con determinación y coraje, el ladrón se preparaba para el enfrentamiento final con el científico Zambrano, enfrentando desafíos y adversidades en su búsqueda por restablecer la paz en la ciudad y proteger a las legendarias iguanas de su oscuro destino.
                    </p>

                    
                </div>    
            </div>
        </div>
    </section> `
}

