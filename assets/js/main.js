const ukContainers = document.querySelectorAll('.uk-container');
let large = 1536
if (window.innerWidth < large) {
    ukContainers.forEach(element => {
        element.classList.remove('uk-container-large')
    });
}

// window.onload = function() {
//     const el = document.getElementById('overlay');
//     el.style.display = 'none';
// };