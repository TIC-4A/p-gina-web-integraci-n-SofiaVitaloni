document.addEventListener('DOMContentLoaded', () => {
    // Si bien esta versión no cambia de página, mantengo el selector para posibles interacciones futuras
    const botonesNav = document.querySelectorAll('.boton-nav');
    
    // Puedes añadir eventos aquí, como un efecto al pasar el ratón, si lo deseas.

    // Ejemplo de alerta al hacer clic en un botón:
    botonesNav.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const texto = e.currentTarget.textContent;
            console.log(`Clic en botón: ${texto}`);
            // alert(`Has hecho clic en ${texto}`);
        });
    });

    // La página principal ya está configurada como 'activa' en el HTML.
});