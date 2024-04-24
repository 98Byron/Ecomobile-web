let loadMoreBtn = document.querySelector('#load-more');
let currentitem = 8;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentitem; i < currentitem + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentitem += 4;
    if(currentitem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }
}

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const VaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    VaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento (e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}