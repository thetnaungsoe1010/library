document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const itemWidth = items[0].offsetWidth;
    const frameWidth = document.querySelector(".carousel-frame").offsetWidth;
    const numVisibleItems = Math.floor(frameWidth / itemWidth);

    let currentIndex = 0;

    const updateTrackPosition = () => {
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    const updateButtons = () => {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - numVisibleItems;
    };

    const prevSlide = () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateTrackPosition();
        updateButtons();
    };

    const nextSlide = () => {
        currentIndex = Math.min(currentIndex + 1, items.length - numVisibleItems);
        updateTrackPosition();
        updateButtons();
    };

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    updateButtons(); // Initialize button states
});

