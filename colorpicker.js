var leftColor = document.querySelector('.leftColor');
var rightColor = document.querySelector('.rightColor');
var css = document.getElementById('colorCode');
var body = document.getElementById('gradient');
// css.innerHTML = "linear-gradient(to right, "+leftColor.value +", "+rightColor.value+")";
console.log(body)

// body.style.background = "white"


function setGradient(){
    body.style.background =
    "linear-gradient(to right, " 
    + leftColor.value
    + ", "
    + rightColor.value 
    + ")"; 
    css.innerHTML = body.style.background;

}

leftColor.addEventListener("input", setGradient)
rightColor.addEventListener("input", setGradient)

