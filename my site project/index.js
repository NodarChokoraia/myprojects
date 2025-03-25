let plius = document.getElementById('nodiko3')
let minus = document.getElementById('nodiko2')
let reset = document.getElementById('nodiko4')
let num = document.getElementById('nodiko1')

let count = 0;



nodiko3.onclick =function(){
count++;
num.textContent = count;



}





nodiko2.onclick = function(){

    count = count - 1;
    num.textContent = count;



}




nodiko4.onclick = function(){

    count = 0;
    num.textContent = count;



}

