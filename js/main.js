`use strict`;
//array immagini
let imagesList = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg'
];

let items = document.querySelector('.items');
let active = 0; 
for (let i = 0; i < imagesList.length; i++){
    items.innerHTML +=
    `<div class="item"><img src="${imagesList[i]}" alt=""></div>`;             
}           
document.querySelector('.item').classList.add('d-block');
let img = document.querySelectorAll('.item');

document.querySelector('.after').addEventListener("click" , function(){
console.log(img);
img[active].classList.remove('d-block');
if(active == img.length-1){
    active = 0;
}
else{
    active++;
    }
    img[active].classList.add('d-block');
});

document.querySelector('.before').addEventListener("click" , function(){
    
    console.log(img);
    img[active].classList.remove('d-block');
    if(active == 0){   
        active = img.length-1;
        }
        else{
            active--;
        }
        img[active].classList.add('d-block');
    }); 
