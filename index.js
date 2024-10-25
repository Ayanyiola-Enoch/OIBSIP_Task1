const menuBtn = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

// Open sidebar
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Close sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});