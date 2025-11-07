document.addEventListener('DOMContentLoaded', () => {
    // Listener para el botón "Comprar ahora"
    const botonComprarAhora = document.querySelector('.boton-comprar-ahora');
    
    if (botonComprarAhora) {
        botonComprarAhora.addEventListener('click', () => {
            alert('¡Compra simulada! Artículo añadido al carrito y listo para procesar el pago.');
        });
    }

    // Aquí podrías añadir más lógica si hubiera validaciones de formulario o animaciones.
});