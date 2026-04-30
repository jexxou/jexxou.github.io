// Changement de Thème
const themeBtn = document.getElementById('themeBtn');
const themeText = document.getElementById('themeText');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        themeText.innerText = "☀️ Mode Clair";
    } else {
        themeText.innerText = "🌙 Mode Sombre";
    }
});

// Animation au défilement (Révélation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
