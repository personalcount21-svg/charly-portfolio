document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.gallery-filters button');
    // Asumiremos que añadirás un atributo data-category a cada imagen en HTML luego
    const photos = document.querySelectorAll('.gallery-grid .photo-item'); 

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar clase activa de todos los botones
            filterButtons.forEach(btn => {
                btn.style.color = 'var(--text-muted)';
                btn.style.borderColor = '#333';
            });
            
            // Añadir clase activa al botón clickeado
            button.style.color = 'var(--text-main)';
            button.style.borderColor = 'var(--text-main)';

            const filterValue = button.textContent.toLowerCase();

            // Lógica básica de filtrado visual
            photos.forEach(photo => {
                // En un futuro, aquí verificarás el data-category de cada foto
                if (filterValue === 'all') {
                    photo.style.display = 'flex';
                } else {
                    photo.style.display = 'none'; // Oculta todas las fotos por defecto, requiere ajuste de HTML
                }
            });
        });
    });
});// Lógica del Lightbox para ampliar imágenes
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryPhotos = document.querySelectorAll('.gallery-photo');

galleryPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = photo.src;
    });
});

// Cerrar al hacer clic en cualquier parte de la pantalla oscura
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});