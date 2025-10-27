document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(
        ".carousel-wrapper"
    );
    carousels.forEach((wrapper) => {
        const track = wrapper.querySelector(
            ".carousel-track"
        );
        const prevButton = wrapper.querySelector(
            '[data-direction="prev"]'
        );
        const nextButton = wrapper.querySelector(
            '[data-direction="next"]'
        );

        if (!track || !nextButton || !prevButton) {
            return;
        }

        function moveToSlide(direction) {
            const slideWidth = track.clientWidth;
            const moveAmount = slideWidth * direction;
            track.scrollBy({
                left: moveAmount,
                behavior: "smooth",
            });
        }

        nextButton.addEventListener("click", () => {
            moveToSlide(1);
        });

        prevButton.addEventListener("click", () => {
            moveToSlide(-1);
        });

        function updateButtonVisibility() {
            const currentScroll = track.scrollLeft;
            const maxScroll =
                track.scrollWidth - track.clientWidth;

            prevButton.disabled = currentScroll < 1;
            nextButton.disabled =
                currentScroll > maxScroll - 1;
        }

        updateButtonVisibility();
        track.addEventListener(
            "scrollend",
            updateButtonVisibility
        );
    });
});