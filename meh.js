var data = [];
var buttons = [...document.querySelectorAll(".main .row div")];

buttons.forEach(function(ele, index){
    ele.addEventListener("click", function(addEventListener){
        console.log(index);
    })
})