const arrOfImages = [
    "csharplogo.png", 
    "csslogo.png", 
    "htmllogo.png", 
    "javalogo.png", 
    "jslogo.png", 
    "pythonlogo.png"
];

function doubleImages(arr) {
    // for (let i = arr.length - 1; i >= 0; i = i - 1) {                
    //     arr.push(arr[i]);        
    // }        
    // return arr;
}

function displayCards(arr) {
    // const container = document.getElementById("container");

    // for (let i = 0; i < arr.length; i = i + 1) {
    //     const newImgElement = document.createElement("img");
    //     newImgElement.src = "static/images/" + arr[i];
    //     newImgElement.id = i;
    //     newImgElement.className = "card";
    //     container.appendChild(newImgElement);
    // }
}

function shuffleCards(arr) {
    // for (let i = 0; i < arr.length; i = i + 1) {
    //     const random = Math.floor(Math.random()*arr.length);
    //     swap(arr, i, random);
    // }
    // return arr;
}

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function hideACard(idx) {
    // const specificCard = document.getElementById(idx);
    // specificCard.src = "static/images/questionmark.png";
}

function revealCard(event) {
    // const clickedImageId = event.target.id;
    // const clickedImage = document.getElementById(clickedImageId); 
    // clickedImage.src = "static/images/" + arrOfImages[clickedImageId];
    // cardsPicked.push(clickedImageId);
    
    // if (cardsPicked.length == 2) {
    //     if (arrOfImages[cardsPicked[0]] == arrOfImages[cardsPicked[1]]) {
    //         cardsPicked = [];
    //     } else {
    //         function hidePickedCards() {
    //             hideACard(cardsPicked[0]);
    //             hideACard(cardsPicked[1]);
    //             cardsPicked = [];
    //         }
    //         window.setTimeout(hidePickedCards, 1000);
    //     }
    // }
}

// Game logic!
doubleImages(arrOfImages);
shuffleCards(arrOfImages);
displayCards(arrOfImages);

for (let i = 0; i < arrOfImages.length; i++) {
    hideACard(i);
}

let cardsPicked = [];

const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", revealCard);
}