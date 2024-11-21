// Получаем элементы
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Текущий индекс изображения
let currentIndex = 0;

// Открыть модальное окно
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
        currentIndex = index;
    });
});

// Закрыть модальное окно
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Переключение вперед
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
});

// Переключение назад
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
});

// Закрытие модального окна при клике вне изображения
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
