`use strict`;
//array immagini
let imageList = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg'
];

const boxImg = document.getElementById('box-img');

for(let i=0;i<imageList.length;i++){
    const imgPrint = imageList[i];
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", imageList[i]);
    if(imageList[0] === imgPrint){

        
    }
        boxImg.append(divImg);
        divImg.append(img);
        console.log(divImg)
        console.log(img)

    
}