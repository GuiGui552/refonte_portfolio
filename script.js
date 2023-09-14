// navbar
let maker = document.querySelector('#indicateur');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');

nav.onclick = function() {
    maker.classList.toggle('change');
}

function indicateur(e) {
    maker.style.left = e.offsetLeft + 'px';
    maker.style.width = e.offsetWidth + 'px';
    maker.style.display = 'block';
    maker.style.filter = 'hue-rotate('+ Math.random() * 360 + 'deg)'
}

item.forEach(link => {
    link.addEventListener("click", (e) => {
        indicateur(e.target);
    })
});

// permet de toggle la classe 'active' entre les différents éléments
function addActiveClass() {
    item.forEach((i) => {
        i.classList.remove('active')
    });
    this.classList.add('active');
}

item.forEach((i) => {
    i.addEventListener("click", addActiveClass)
});

// curseur personnalisé

let cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

