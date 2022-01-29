document.querySelector(".hamicon").addEventListener("click", () => {
    document.querySelector(".navcontainer").classList.toggle("sidebargo");
    if (document.querySelector(".ulcontainer").classList.contain("sidebargo")) {
        document.querySelector(".hamicon").style.display = "inline";
    } else {
        document.querySelector(".hamicon").style.display = "none";
    }
});
document.getElementById('card1').style.display = 'inline';
document.getElementById('card2').style.display = 'none';
document.getElementById('card3').style.display = 'none';
let noOfClicks = 0;
document.getElementById('larrow').addEventListener('click', () => {
    noOfClicks--;
    let rem = noOfClicks%3;
    switch (rem) {
        case -2:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'inline';
            document.getElementById('card3').style.display = 'none';
            break;
        case -1:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'none';
            document.getElementById('card3').style.display = 'inline';
            break;
        case 0:
            document.getElementById('card1').style.display = 'inline';
            document.getElementById('card2').style.display = 'none';
            document.getElementById('card3').style.display = 'none';
            break;
        case 1:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'inline';
            document.getElementById('card3').style.display = 'none';
            break;
        case 2:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'none';
            document.getElementById('card3').style.display = 'inline';
            break;
    }    
})
document.getElementById('rarrow').addEventListener('click', () => {
    noOfClicks++;
    var remr = noOfClicks % 3;
    switch (remr) {
        case -2:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'inline';
            document.getElementById('card3').style.display = 'none';
            break;
        case -1:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'none';
            document.getElementById('card3').style.display = 'inline';
            break;
        case 0:
            document.getElementById('card1').style.display = 'inline';
            document.getElementById('card2').style.display = 'none';
            document.getElementById('card3').style.display = 'none';
            break;
        case 1:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'inline';
            document.getElementById('card3').style.display = 'none';
            break;
        case 2:
            document.getElementById('card1').style.display = 'none';
            document.getElementById('card2').style.display = 'none';
            document.getElementById('card3').style.display = 'inline';
            break;
    }
})