const color = document.getElementById ('change-button')
const body = document.body;
/*
const textColor = document.getElementById('change-text')
*/

function randomColor (){

    return Math.floor (Math.random()*255);
}

color.addEventListener ('click', e)

function e(){
    const color1 = randomColor();
    const color2 = randomColor(); 
    const color3 = randomColor();


    const rgbChange = `rgb(${color1},${color2},${color3} )`

    body.style.background = rgbChange;
    
   // textColor.innerText = rgbChange;


}



