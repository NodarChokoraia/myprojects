let randomnum;


let generator = document.getElementById('nodiko2');

let num = document.getElementById('nodiko1');


let reset = document.getElementById('nodiko3');

generator.onclick = function(){
    
    num.textContent = randomnum;
    
    randomnum = Math.floor(Math.random()*1000)+1;

    
}



reset.onclick = function(){
    
    num.textContent = 0;
    


    
}


