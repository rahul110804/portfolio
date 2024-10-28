const sidebar = document.querySelector('.sidebar');
function showSidebar() {
    sidebar.style.display = 'flex';
}
function hidesidebar() {
    sidebar.style.display = 'none';
}
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href');
            window.location.hash = sectionId;
            location.reload();
        });
    });
});