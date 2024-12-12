document.addEventListener('DCOMContentLoaded', () => {
    const present = document.getElementById('present');
    const cardReveal = document.getElementById('card-reveal');

    present.addEventListener('click', () => {
        present.style.filter = 'grayscale(100%)'; // Visual cue that present has been opened
        cardReveal.classList.remove('hidden');
});
});
