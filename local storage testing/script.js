
let input = document.getElementById('input');
let inputvalue = input.value;
let button = document.getElementById('button');

button.onclick = function(){
    localStorage.setItem('name',input.value,'nodiko',inputvalue);
    localStorage.removeItem('name');
    
    console.log(localStorage.getItem('name'));
}

/*button.onclick = function(){
    localStorage.setItem('name',input.value);
    if(input.value==''){
        console.log('enter sommothing ');
        
    }else if(input.value!=''){
        
        console.log(localStorage.getItem('name'));
        

    }
}*/
x=[2,3,'4','2'];
x[2]=Number(x[2]);
console.log(x);

x=Number()


let res=Number();
  for(let i = 0;i<x.length;i++){
    
    res+=x[i]
  }
  console.log(res);
  