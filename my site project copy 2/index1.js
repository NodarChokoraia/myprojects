let weight = document.getElementById('nodiko');
let height = document.getElementById('nodiko1');
let calculator = document.getElementById('nodiko2');
let shedeg = document.getElementById('nodiko3');










calculator.onclick = function() {
    let  bmi;
    let weightvalue = Number(weight.value);
    let heightvalue = Number(height.value);
    bmi =  weightvalue /(heightvalue*heightvalue);


    

    if(bmi<18.5){
        shedeg.textContent = 'Underwheight';
    }

    else if(bmi<=25){
        shedeg.textContent ='Normal';
    }

    else if(bmi<=30){
        shedeg.textContent = 'Overweight';
    }


    else{
        shedeg.textContent = 'Obesity';
    }
     





};



