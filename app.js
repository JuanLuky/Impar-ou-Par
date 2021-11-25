// Impar ou Par

function verificarInput() {
    const verificar = document.getElementById('numero')
    const valorInput = verificar.value;
    const mostrar = document.querySelector('.mostra');

    for(let i = 0; i < valorInput; i++) {
        if( valorInput % 2 === 0 ) {
            mostrar.innerHTML = valorInput + " É PAR"
        } else {
            mostrar.innerHTML = valorInput + " É IMPAR"
        }
    }
}