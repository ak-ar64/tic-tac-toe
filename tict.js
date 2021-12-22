var playing = true;
var xTurn = true;
var playCount = 0;

function resetGame(){
    for(var i = 1;i<=3;i++){
        var resetSquare = "a" + i;
        document.getElementById(resetSquare).innerHTML = "-";
        resetSquare = "b"+i;
        document.getElementById(resetSquare).innerHTML = "-";
        resetSquare = "c"+i;
        document.getElementById(resetSquare).innerHTML = "-";
    }
    playing = true;
    xTurn = true;
    document.getElementById("info").innerHTML = "It's X's turn!";
    document.getElementById("resetButton").disabled = "true";
}

function testWin(
    lastPlayerIsX
){
    //Tests Winner Combination
    var pw;
    if(lastPlayerIsX == true){
        pw = "X";
    } else{
        pw = "0";
    }
    if(document.getElementById("a1").innerHTML == pw && document.getElementById("a2").innerHTML == pw && document.getElementById("a3").innerHTML == pw
    && document.getElementById("b1").innerHTML == pw && document.getElementById("b2").innerHTML == pw && document.getElementById("b3").innerHTML == pw
    && document.getElementById("c1").innerHTML == pw && document.getElementById("c2").innerHTML == pw && document.getElementById("c3").innerHTML == p2 ||
    document.getElementById("a1").innerHTML == pw &&  document.getElementById("b1").innerHTML == pw && document.getElementById("c1").innerHTML == pw &&
    document.getElementById("a2").innerHTML == pw && document.getElementById("b2").innerHTML == pw && document.getElementById("c2").innerHTML == pw &&
    document.getElementById("a3").innerHTML == pw && document.getElementById("b3").innerHTML == pw && document.getElementById("c3").innerHTML == pw ||
    document.getElementById("a1").innerHTML == pw && document.getElementById("b2").innerHTML == pw && document.getElementById("c3").innerHTML == pw &&
    document.getElementById("a3").innerHTML == pw && document.getElementById("b2").innerHTML == pw && document.getElementById("c1").innerHTML == pw) {
    document.getElementById("resetButton").disabled = false;
    }
}

function play(
    choosenSquare
){
    if(document.getElementById(choosenSquare).innerHTML == "-" && playing==true){
        if(xTurn == true){
            document.getElementById(choosenSquare).innerHTML="X";
            document.getElementById("info").innerHTML="It's O's Turn";
            xTurn = false;
        }
        else{
            document.getElementById(choosenSquare).innerHTML = "0";
            document.getElementById("info").innerHTML = "It's X turn";
            xTurn = true;
        }
        playCount++;
        testWin(!xTurn);
        if(playCount === 9){
            document.getElementById("info").innerHTML="It's a tie!";
            document.getElementById("resetButton").disabled = false;
            playCount = 0;
        }
    }
}