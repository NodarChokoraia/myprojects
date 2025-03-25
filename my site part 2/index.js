let laptop1 =document.getElementById('laptop1');
let cost = 0;
cost= Number();
let total = document.getElementById('total');
let lp1 = document.getElementById('lp1');
let phone1 = document.getElementById('phone1');
let ph1 = document.getElementById('ph1');
let pc1 = document.getElementById('pc1');
let pcc1 = document.getElementById('pcc1');
let tv1 = document.getElementById('tv1');
let tvv1 = document.getElementById('tvv1');

let id = document.getElementById('but2');
let buy = document.getElementById('buy');
laptop1.onclick=function(){
    
    cost = cost +1999;
    total.textContent = cost; 
    lp1.textContent = 'first item:Lenovo IdeaPad Slim 3 ';



};


phone1.onclick=function(){
    
    cost = cost+2599;
    total.textContent = cost; 
    ph1.textContent = 'secend item:Samsung Galaxy Z Fold 6 ';



};
pc1.onclick=function(){
    
    cost = cost+499;
    total.textContent = cost; 
    pcc1.textContent = 'third item:ViewSonic 32';



};
tv1.onclick=function(){
    
    cost = cost+2999;
    total.textContent = cost; 
    tvv1.textContent = 'forth item: Samsung TV';



};


but2.onclick=function(){
    cost = 0;
    
    total.textContent = 0; 
    lp1.textContent = ' ';

    tvv1.textContent = ' ';
pcc1.textContent = ' ';
ph1.textContent = '  ';

};
buy.onclick=function(){
    window.alert(`all of this is ${cost}$`);
    window.alert('you order will be deliverd soon');
    cost = 0;
    
    total.textContent = 0; 
    lp1.textContent = ' ';

    tvv1.textContent = ' ';
pcc1.textContent = ' ';
ph1.textContent = '  ';
    
    
    

};
