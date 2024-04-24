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