var reset = document.getElementById("restart");
var data = [];
var buttons = [...document.querySelectorAll(".main .row div")];
var counter = 0;
var going = true;
var x_wins = false;
var o_wins = false;
var sum = 0;
var wining_announcement = document.getElementById("gameStatus");
buttons.forEach(function(ele, index){
    ele.addEventListener("click", function(addEventListener){
        console.log(index);
        reset.addEventListener("click", function(addEventListener){
            data = [];
            ele.innerHTML = "";
            wining_announcement.innerHTML = "O's Turn";
            counter = 0;
            going = true;
            x_wins = false;
            o_wins = false;
            sum = 0;
        })
        if (data[index] == undefined){
            if (counter % 2 == 0 && going == true){
                ele.innerHTML = "O";
                data[index] = 'O';
                if (data[0] == 'O' && data[1] == 'O' && data[2] == 'O' || data[3] == 'O' && data[4] == 'O' && data[5] == 'O' || data[6] == 'O' && data[7] == 'O' && data[8] == 'O' || data[0] == 'O' && data[4] == 'O' && data[8] == 'O' || data[2] == 'O' && data[4] == 'O' && data[6] == 'O' || data[0] == 'O' && data[3] == 'O' && data[6] == 'O' || data[1] == 'O' && data[4] == 'O' && data[7] == 'O' || data[2] == 'O' && data[5] == 'O' && data[8] == 'O'){
                    console.log("O Wins");
                    wining_announcement.innerHTML = "O Wins";
                    o_wins = true;
                    going = false;
                }
                else {
                    wining_announcement.innerHTML = "X's Turn";
                }
            }
            else if (counter % 2 != 0 && going == true) {
                ele.innerHTML = "X";
                data[index] = 'X';
                if (data[0] == 'X' && data[1] == 'X' && data[2] == 'X' || data[3] == 'X' && data[4] == 'X' && data[5] == 'X' || data[6] == 'X' && data[7] == 'X' && data[8] == 'X' || data[0] == 'X' && data[4] == 'X' && data[8] == 'X' || data[2] == 'X' && data[4] == 'X' && data[6] == 'X' || data[0] == 'X' && data[3] == 'X' && data[6] == 'X' || data[1] == 'X' && data[4] == 'X' && data[7] == 'X' || data[2] == 'X' && data[5] == 'X' && data[8] == 'X'){
                    console.log("X Wins");
                    wining_announcement.innerHTML = "X Wins";
                    x_wins = true;
                    going = false;
                }
                else {
                    wining_announcement.innerHTML = "O's Turn";
                }
            }
            if (counter == 8 && going == true){
                console.log("Draw");
                wining_announcement.innerHTML = "Draw";
            }
            counter++;
        }
    })
})
