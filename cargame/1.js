let borbali1 = document.getElementById('borbali1');
let borbali2 = document.getElementById('borbali2');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let forward = document.getElementById('forward');
let check = false;
let sound = document.getElementById('sound');
let car = document.getElementById('car');

start.onclick = function(){
    if(check==false){
        check=true;
        start.textContent='turn off';
        sound.src = 'engine-61234.mp3';
        sound.play();
    }else if((check==true)){
        start.textContent='start';
        check=false;
        sound.src='none';
        borbali1.style.animationName='none';
        borbali2.style.animationName='none';
        car.style.animationPlayState='paused';
    }
    console.log(check);
    
    
};

forward.onclick = function(){
    if(check==true){
        borbali1.style.animationName='spin';
        borbali2.style.animationName='spin';
        car.style.animationPlayState='running';
    }else if(check==false){
        borbali1.style.animationName='none';
        borbali2.style.animationName='none';
        
    }
    
    

}
stop.onclick = function(){
        car.style.animationPlayState='paused';
        borbali1.style.animationName='none';
        borbali2.style.animationName='none';
    
}

