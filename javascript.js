const table = document.getElementById("table");
const timer = document.getElementById("timer");
let arr = [ '🎄', '💣', '🎄', '🎄', '🎄', '🎄', '🎄', '💣', '🎄', '🎄', '🎄', '🎄', '💣', '🎄', '🎄', '🎄' ];
let code = '';
let sec = 4;

// setInterval(function(){ 
//     if(sec >= 0) {timer.innerHTML = sec-- }
    
// },1000)    
        
    
    

//  START creating a table
for (let i = 1; i <= 4; i++) {
    code += '<tr>'  
    for (let j = 1; j <= 4; j++) {
        code += `<td style="background: orange;" class="cell${(i == 1) ? ' one' :
                                  (i == 2) ? ' two' : 
                                  (i == 3) ? ' three' : 
                                  (i == 4) ? ' four' : ' ' }" onclick="opens(this)"></td>`
    }  
    code += '</tr>'     
}
table.innerHTML = code
//  FINISH creating a table

// START creating game functionality
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const three = document.querySelectorAll(".three");
const four = document.querySelectorAll(".four");
const game = 'GAME';
const over = 'OVER';

function opens(xana) {
 
    if( xana.style.background=='orange') {
        let key = rand (0, arr.length-1)
        xana.innerHTML = arr[key];
        arr.splice(key, 1);
      
    
    if( xana.innerHTML == '🎄' ) {
        xana.style.transform = 'rotateY(180deg)'
        xana.style.background = "green"
        xana.style.background = "green"

    } else if( xana.innerHTML == '💣') {
        xana.style.transform = 'rotateY(180deg)'
        xana.style.background = "red"

        setTimeout(function () {
            function myLoop () {
                setTimeout(function() {
                    for(let d = 0; d<=3; d++) {

                        one[d].style.transform = 'rotateY(360deg)'
                        two[d].style.transform = 'rotateY(360deg)'
                        three[d].style.transform = 'rotateY(360deg)'
                        four[d].style.transform = 'rotateY(360deg)'
                     
                        one[d].style.background = 'black'
                        two[d].style.background = 'black'
                        three[d].style.background = 'black'
                        four[d].style.background = 'black'
    
                        one[d].innerHTML = ' '
                        four[d].innerHTML = ' '
                        two[d].innerHTML = game[d]
                        three[d].innerHTML = over[d]
                    }
            },100)
            } myLoop()
        }, 300);
    }}
}
// FİNİSH creating game functionality

// START reseting the game
const cell = document.querySelectorAll('.cell');
const reset = document.getElementById("reset");
function again() {
    cell.forEach((item) => {
      item.style.background = 'orange';
      item.innerHTML = '';
      arr = [ '🎄', '💣', '🎄', '🎄', '🎄', '🎄', '🎄', '💣', '🎄', '🎄', '🎄', '🎄', '🎄', '💣', '🎄', '🎄' ]
    }
    )
}
reset.addEventListener('click', again)
// FINISH reseting the game

// Using this function we get random numbers
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
} 

