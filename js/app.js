
'use strict';
let attempts = 0;
let m = 25;
let attemptsEl = document.getElementById('attempts');
let BusMall1 = [];
function BusMall(productName) {
    'bag.jpg'.split('.') >> ['bag', 'jpg']
    this.productName = productName.split('.')[0];
    this.source = 'img/' + productName;
    this.clicks = 0;
    this.views = 0;
    BusMall1.push(this);
}
// let goat1 = new BusMall('cruisin-goat', 'images/cruisin-goat.jpg');
// let goat2 = new BusMall('float-your-goat.jpg', 'images/float-your-goat.jpg');
let BusMallImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg',
    'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg',
    'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
    'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg',
    'wine-glass.jpg'];
for (let i = 0; i < BusMallImg.length; i++) {
    new BusMall(BusMallImg[i]);
}
function generateImage() {
    //0-1 >> 0-7
    return Math.floor(Math.random() * BusMall1.length);
}
// console.log(BusMall1);
// generateImage();
let lImgEl = document.getElementById('leftImg');
let mImgEl = document.getElementById('middleImg');
let rImgEl = document.getElementById('rightImg');
let leftImgIndex;
let rightImgIndex;
let middleImgIndex;
function renderImg() {
    leftImgIndex = generateImage();
    rightImgIndex = generateImage();
    middleImgIndex = generateImage();
    while (leftImgIndex === rightImgIndex) {
        leftImgIndex = generateImage();
    }
    lImgEl.setAttribute('src', BusMall1[leftImgIndex].source);
    lImgEl.setAttribute('title', BusMall1[leftImgIndex].source);
    BusMall1[leftImgIndex].views++;
    rImgEl.setAttribute('src', BusMall1[rightImgIndex].source);
    rImgEl.setAttribute('title', BusMall1[rightImgIndex].source);
    BusMall1[rightImgIndex].views++;
    attemptsEl.textContent = attempts;
    mImgEl.setAttribute('src', BusMall1[middleImgIndex].source);
    mImgEl.setAttribute('title', BusMall1[middleImgIndex].source);
    BusMall1[middleImgIndex].views++;
    // console.log('left', leftImgIndex)
    // console.log('right', rightImgIndex);
}
renderImg();
lImgEl.addEventListener('click', handelClicks);
rImgEl.addEventListener('click', handelClicks);
mImgEl.addEventListener('click', handelClicks);
function handelClicks(event) {
    attempts++;
    if (attempts <= m) {
        console.log(event.target.id)
        if (event.target.id === 'leftImg') {
            BusMall1[leftImgIndex].clicks++;
        } else if (event.target.id === 'rightImg') {
            BusMall1[rightImgIndex].clicks++;
        }
        else if (event.target.id === 'middleImg') {
            BusMall1[middleImgIndex].clicks++;
        }
        renderImg();
     }else {
        let ulEl = document.getElementById('results');
        let liEl;
        for (let i = 0; i < BusMall1.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${BusMall1[i].productName} has ${BusMall1[i].views} views and has ${BusMall1[i].clicks} clicks.`
        }
        lImgEl.removeEventListener('click', handelClicks);
        rImgEl.removeEventListener('click', handelClicks);
        mImgEl.removeEventListener('click', handelClicks);
    }
}