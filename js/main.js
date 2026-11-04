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

            // Filtrar elementos (fotos y banners)
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const isBanner = item.classList.contains('coming-soon-banner');

                if (filterValue === 'all') {
                    // En "ALL" mostramos las fotos pero ocultamos los banners
                    if (isBanner) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'flex'; // O 'block' según prefieras para tus fotos
                    }
                } else {
                    // Si se elige una categoría específica (ej. fashion, conceptual, etc.)
                    if (category === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Lógica del Lightbox para ampliar imágenes
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