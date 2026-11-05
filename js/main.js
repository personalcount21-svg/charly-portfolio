document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.gallery-filters button');
    
    // Seleccionamos tanto las fotos como los banners de "Próximamente"
    const galleryItems = document.querySelectorAll('.gallery-grid .photo-item, .gallery-grid .coming-soon-banner');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar estilo activo de todos los botones
            filterButtons.forEach(btn => {
                btn.style.color = 'var(--text-muted)';
                btn.style.borderColor = '#333';
            });
            
            // Añadir estilo activo al botón presionado
            button.style.color = 'var(--text-main)';
            button.style.borderColor = 'var(--text-main)';

            const filterValue = button.textContent.trim().toLowerCase();

            // Filtrar elementos con animación fluida
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const isBanner = item.classList.contains('coming-soon-banner');

                const matches = (filterValue === 'all' && !isBanner) || (category === filterValue);

                if (matches) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400); // Coincide con la transición CSS
                }
            });
        });
    });

    // Lógica del Lightbox para ampliar imágenes de forma limpia
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
    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }
});