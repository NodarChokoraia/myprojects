let input = document.getElementById('input');

let Fahrenhiet = document.getElementById('Fahrenhiet');

let Celsius = document.getElementById('Celsius');

let submit = document.getElementById('submit');

let shedeg = document.getElementById('shedeg');

let temperatura;


console.log(temperatura)



submit.onclick = function(){

    

    if(!Fahrenhiet.checked&&!Celsius.checked){
        shedeg.textContent = 'select unit';
        
    }



    else if(Fahrenhiet.checked){
        temperatura = Number(input.value);
        temperatura = temperatura * 9 / 5 + 32;
        shedeg.textContent = temperatura.toFixed(1) + 'F';

    }

    else if(Celsius.checked){
        temperatura = Number(input.value);
        temperatura = (temperatura - 32) * (5/9);
        shedeg.textContent = temperatura.toFixed(1) + 'C';
    }


    







}





let calculator =window.prompt('This is calculator');

let calculatorvalue = calculator.velue;




window.alert(calculatorvalue+0);

