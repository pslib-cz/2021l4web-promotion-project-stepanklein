var vh = window.innerHeight * 0.01;
var btns = document.getElementsByClassName("selection__btn");
var selection = document.getElementById("selection");
var beers = document.getElementsByClassName("selection__beer");
var beerTexts =document.getElementsByClassName("selection__beer__text")
var currentBeer = 0 ;
var pos = 60*vh;      
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
     let vh = window.innerHeight * 0.01;
     pos = 60*vh;  
     document.documentElement.style.setProperty('--vh', `${vh}px`);
    changeBtnPosition();
});

document.onscroll = () => changeBtnPosition();
function changeBtnPosition()
{
   
        if(window.innerWidth >= 340){
            
            if ((selection.offsetHeight - 150 - pos) < window.pageYOffset) {
               
               for (let i = 0; i < btns.length; i++) {
                   const btn = btns[i];
                   btn.style.top = (selection.offsetHeight - 150) + "px";             
                   btn.classList.add("selection__btn--absolute");
 
               }
            }
            else{
                for (let i = 0; i < btns.length; i++) {
                    const btn = btns[i];
                    btn.classList.remove("selection__btn--absolute");
                    btn.style.top = null;
                }
            }
        }
        else{
            for (let i = 0; i < btns.length; i++) {
                const btn = btns[i];
                btn.classList.remove("selection__btn--absolute");
                btn.style.top = null;
            }
        }

}
function next(change){
    currentBeer = currentBeer + change;

if(currentBeer > beers.length-1){
    currentBeer = 0;
}
else if(currentBeer < 0){
currentBeer = beers.length-1;
}
console.log(currentBeer)
for (let i = 0; i < beers.length; i++) {
    const element = beers[i];
    if(i==currentBeer){
        element.classList.remove("selection__beer--hidden");
    }
    else{
        element.classList.add("selection__beer--hidden");
    }
}
}
function select(beer){
    for (let i = 0; i < beerTexts.length; i++) {
        const element = beerTexts[i];
        if(i==beer){
            element.classList.add("selection__beer__text--selected");
        }
        else{
            element.classList.remove("selection__beer__text--selected");
        }
    }
}