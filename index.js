const beers = document.getElementsByClassName("selection__beer");
const beerTexts =document.getElementsByClassName("selection__beer__text")
let currentBeer = 0 ;

setVh()
var pos 
document.documentElement.style.setProperty('--pY', `${0}px`);


window.addEventListener('resize', () => {
    setVh()
    changeBtnPosition();
});

document.onscroll = () => {
    changeBtnPosition();
    setPY();
}

/*Opravuje nepřesné vh ve Chromu na telefonech */
function setVh(){
    let vh = window.innerHeight * 0.01;
    pos = 60*vh;  
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/* Změna chování šipek "selection__btn" v závislosti na window.pageYOffset (pouze na mobilu) */
function changeBtnPosition(){
    const btns = document.getElementsByClassName("selection__btn");
    const selection = document.getElementById("selection");

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

/* Změna aktuálně zobrazeného piva (pouze na mobilu) */
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

/* Změna aktuálně zobrazeného textu k pivu (pouze na desktopu) */
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

/* toggle hamburgr menu (pouze na mobilu) */
function switchMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("hidden")
}

/* vytváří css custom property "--pY" */
function setPY(){
    let x = (window.pageYOffset - 420) * 0.008;
    if(x<0)
    { 
        x = 0;
    }
    else if(x>1)
    {
        x=1;
    }
    document.documentElement.style.setProperty('--pY', `${x}`);
}