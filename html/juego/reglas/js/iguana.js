function iguanaRules() {
    const regionContenido = document.getElementById("RulesContainer");

    regionContenido.innerHTML = `
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg iguana-title">PRINCIPAL</h4>
    <ul class="text-white">
        <li>Inicialmente, solo puede mover a las miniiguanas, la iguana principal se encuentra reposando en su casilla inicial.</li>
        <li>Para ganar, todos los ladrones deben haber recibido 3 Strikes de Iguana.</li>
        <li>En caso de que una miniiguana alcanza a un ladrón, estos deben lanzar los dados y el de mayor número gana. Si la miniiguana gana, el ladrón vuelve a su parada inicial y recibe un <b>Strike de Iguana</b>. Pero, si es la iguana principal la que colisiona, los ladrones no tienen opción a defenderse.</li>
        <li>Por cada jugador chocado por primera vez, se invoca una miniiguana en la puerta para continuar la persecución. Si un jugador tiene el huevo, este regresa al parque.</li>
        <li>Cuando el huevo es robado, la iguana comenzará a moverse y al finalizar cada ronda los 3 ladrones deben lanzar los dados, el de menor número recibe el efecto de una carta maldición.</li>
        <li>Las iguanas no pueden entrar en las paradas, pero pueden esperar afuera.</li>
    </ul>
    <h4 style="margin-bottom: 1rem;margin-top: 0.5rem;" class="subtitle-bg iguana-title">MOVIMIENTO</h4>
    <ul class="text-white">
        <li>El jugador de la iguana lanza el dado 123 para mover todas las iguanas en el campo para alcanzar a los ladrones. </li>
    </ul>
    `;
}