// Définir la fonction d'abord
function updateThemeButton() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.innerHTML = isDarkMode 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
}

// Vérifier si l'utilisateur a une préférence sauvegardée
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme + '-mode');
updateThemeButton();

// Obtenir le bouton et ajouter un event listener
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
    document.body.classList.remove(currentTheme + '-mode');
    document.body.classList.add(newTheme + '-mode');
    localStorage.setItem('theme', newTheme);
            
    updateThemeButton();
});