const seccionUno = document.getElementById("TipoI1");
seccionUno.addEventListener('click', puntoA);


function puntoA(){
    const regionContenido = document.getElementById("JavascriptFile");

    regionContenido.innerHTML = `
    
    <div class="bloque-titulo">
        <h2 class="titulo-seleccionado">Proceso de ideacion</h2>
    </div>
    
    <div class="bloque-ideas">
        
        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 1</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">dragon</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">desafiante</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">romper</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 2</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">nave</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">honorable</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">amar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 3</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">bardo</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">resplandesciente</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">lanzar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 4</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">guardian</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">grande</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">ensamblar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 5</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">sapos</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">sorprendente</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">sacrificar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 6</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">aramdura</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">miedoso</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">forjar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 7</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">espada</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">feroz</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">escoger</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 8</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">romance</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">venenoso</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">volar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 9</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">paredes</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">sigiloso</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">palmear</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 10</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">druida</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">solitario</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">incrementar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 11</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">ladron</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">astuto</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">correr</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 12</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">gato</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">fuerte</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">nadar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 13</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">fantasma</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">valiente</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">transmutar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 14</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">ritmo</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">enojado</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">atrapar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 15</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">ciclo</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">espacioso</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">volar</h5>
                </div>
            </div>

        </div>

        <div class="idea">

            <div class="seccion-numero-idea">
                <h4 class="numero-idea">Idea 16</h4>
            </div>

            <div class="seccion-estructura-idea">
                <div class="columna-uno">
                    <h4 class="estructura-idea">Sustantivo</h4>
                    <h5 class="idea-especifica">aliens</h5>
                </div>
                <div class="columna-dos">
                    <h4 class="estructura-idea">Adjetivo</h4>
                    <h5 class="idea-especifica">quemado</h5>
                </div>
                <div class="columna-tres">
                    <h4 class="estructura-idea">Verbo</h4>
                    <h5 class="idea-especifica">convencer</h5>
                </div>
            </div>

        </div>



    </div>
    
    
    `;
}

