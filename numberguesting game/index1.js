let number = document.getElementById('number');
let guestnumber = document.getElementById('guestnumber');
let guest = document.getElementById('guest');
let shedeg = document.getElementById('shedeg');
let reset = document.getElementById('reset');
    let value1;
    let value2 ;

guest.onclick = function(){
    value1 = Number(number.value);
    value2 = Number(guestnumber.value);


    if(value1 ==''||value2==''){
        shedeg.textContent = 'error'
     
    }



    else if(value1===value2){
        shedeg.textContent = 'you are corect'

    }
    else if(value1!==value2){
        shedeg.textContent = 'you are incorect'
    }
    




};




