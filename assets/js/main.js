const ukContainers = document.querySelectorAll('.uk-container');
let large = 1536
if (window.innerWidth < large) {
    ukContainers.forEach(element => {
        element.classList.remove('uk-container-large')
    });
}

window.onload = function() {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
};

const newsBigImgs = document.querySelectorAll('.news-big-images-wrapper li')
const newsSmallImgs = document.querySelectorAll('.news-small-images-href')
const urlItem = window.location.hash.substr(1);
newsBigImgs.forEach(function(list) {
    if (list.id == urlItem) {
        list.classList.add('active')
    } else {
        list.classList.remove('active')
    }
})
newsSmallImgs.forEach(function(btn) {
    btn.addEventListener('click', event => {
      newsBigImgs.forEach(function(list) {
          if (list.id == event.target.dataset.target) {
              list.classList.add('active');
          } else {
            list.classList.remove('active');
          }
      })
    })
});
