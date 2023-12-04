let headingel = document.getElementById("headingElement");
let hedingchange = false;
let changeBtnel = document.getElementById("changebtn");
function onChangeheading(){
    if(hedingchange===false){
        headingel.textContent="4.0 technologies";
        hedingchange =true;
    }
    else{
        headingel.textContent="Web technologies";
        hedingchange=false;
    }
    headingel.style.color="blue";

}






function switchOff() {
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}