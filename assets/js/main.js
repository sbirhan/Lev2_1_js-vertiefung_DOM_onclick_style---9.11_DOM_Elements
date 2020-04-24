var i = 0;
var j = 3;

function changeMe(){
    i = i + 1;
    var k = i % j;

    if (k == 1){
        document.getElementById("navContact").style.backgroundColor="rgb(51,51,51)";
        document.getElementById("navContact").style.transform="scaleX(1)"
        document.getElementById("navHome").style.backgroundColor="firebrick";
        document.getElementById("navHome").style.transform="scaleX(-1)"
    }
    else if (k == 2){
        document.getElementById("navHome").style.backgroundColor="black";
        document.getElementById("navHome").style.transform="scaleX(1)"
        document.getElementById("navNews").style.backgroundColor="goldenrod";
        document.getElementById("navNews").style.transform="scaleX(-1)"
    }
    else {
        document.getElementById("navNews").style.backgroundColor="black";
        document.getElementById("navNews").style.transform="scaleX(1)" 
        document.getElementById("navContact").style.backgroundColor="cornflowerblue";
        document.getElementById("navContact").style.transform="scaleX(-1)"
    }

}