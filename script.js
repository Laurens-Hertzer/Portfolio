const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // Anschalten des light-class bei Body
});