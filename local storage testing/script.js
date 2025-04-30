let signupName = document.getElementById('signupname').value;
let loginName = document.getElementById('loginupname').value;
let signupPassword = document.getElementById('signuppassword').value;
let loginPassword = document.getElementById('loginpassword').value;

let signupbutton =document.getElementById('signupbut');

let loginbutton = document.getElementById('loginbut');

localStorage.setItem('Sname', signupName);
localStorage.setItem('Lname', loginName);
localStorage.setItem('Spassword', signupPassword);
localStorage.setItem('Lpassword', loginPassword);
setInterval(function(){
    localStorage.getItem('Sname')
},1000)
console.log(localStorage.getItem('Sname'));

signupbutton.onclick = function(){
    localStorage.getItem('Sname')
    localStorage.getItem('Spassword')
};