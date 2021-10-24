let previousEvent;
let headerText = document.querySelector(".headerText");
function changelvl3Color(event){
    if(previousEvent == null){
        previousEvent = event;
    }
    if(previousEvent != null && previousEvent != event){
        previousEvent.classList.toggle("toggleColor2");
    }
    event.classList.toggle("toggleColor2");
    headerText.innerHTML= event.lastChild.data;
    previousEvent = event;
}
function arrowFlipped(event){
    event.parentElement.children[1].classList.toggle("arrowFlip");
}
function arrowAndColor(event){
    event.parentElement.classList.toggle("toggleColor");
    event.parentElement.children[1].classList.toggle("arrowFlip");

}
