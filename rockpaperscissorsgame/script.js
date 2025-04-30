let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let res = '';

let player = document.getElementById('img2');
let bot1 = document.getElementById('img1');
console.log(player);

let but = document.querySelector('button');

let p1 = document.getElementById('p1');





rock.addEventListener('click',function(){
    res = 'rock';
    player.src = 'images/rock.png'
})


paper.addEventListener('click',function(){
    res = 'paper';
    player.src = 'images/paper.png'
})

scissors.addEventListener('click',function(){
    res = 'scissors';
    player.src = 'images/scissors.png'
})


but.addEventListener('click',function(bot,botres){
    p1.style.color = 'black'
    bot = Math.floor(Math.random()*4);
    botres = '';
    if(bot==0){
        botres = 'rock';
    }else if(bot==1){
        botres = 'paper'
    }else{
        botres = 'scissors'
    }
    let check = 3
    let interval =setInterval(function(){
        
        p1.textContent = check
        check--
        console.log(check);
        
        if(check==0){
            clearInterval(interval)
            if(res == botres){
                p1.textContent = 'Its tie'
            }else if(res=='rock' && botres == 'paper'){
                bot1.src = 'images/paper.png'
                p1.textContent = 'you lost'
                p1.style.color = '#8C1C13'
            }else if(res=='paper' && botres == 'scissors'){
                bot1.src = 'images/scissors.png'
                p1.textContent = 'you lost'
                p1.style.color = '#8C1C13'
            }else if(res=='scissors' && botres == 'rock'){
                bot1.src = 'images/rock.png'
                p1.textContent = 'you lost'
                p1.style.color = '#8C1C13'
            }
            else if(res=='paper' && botres == 'rock'){
                bot1.src = 'images/rock.png'
                p1.textContent = 'you won'
                p1.style.color = '#28D033'
            }else if(res=='scissors' && botres == 'paper'){
                bot1.src = 'images/paper.png'
                p1.textContent = 'you won'
                p1.style.color = '#28D033'
            }else if(res=='rock' && botres == 'scissors'){
                bot1.src = 'images/scissors.png'
                p1.textContent = 'you won'
                p1.style.color = '#28D033'
            }else{
                p1.textContent = 'error'
                
            }
        }
    },1000)
})
