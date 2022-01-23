let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y);

let form = document['form'];
let name = form.personName.value;
let second = form.personSecond.value;
let email = form.personEmail.value;
let number  = form.personNumber.value;
let password = form.personPassword.value;

// form.personButton.addEventListener('click', function(){
//     let name = form.personName.value;
//     let second = form.personSecond.value;
//     let email = form.personEmail.value;
//     let number  = form.personNumber.value;
//     let password = form.personPassword.value;
//     if(name ==''){
//         sel('.name').style.background = 'rgb(243, 18, 18)';
//     }
//     else if(name!=''){
//         sel('.name').style.background = 'rgb(231, 192, 15)';
//     }
//     if(second ==''){
//         sel('.second').style.background = 'rgb(243, 18, 18)';
//     }
//     else if(second!=''){
//         sel('.second').style.background = 'rgb(231, 192, 15)';
//     }
//     if(email ==''){
//         sel('.email').style.background = 'rgb(243, 18, 18)';
//     }
//     else if(email!=''){
//         sel('.email').style.background = 'rgb(231, 192, 15)';
//     }
//     if(number ==''){
//         sel('.number').style.background = 'rgb(243, 18, 18)';
//     }
//     else if(number!=''){
//         sel('.number').style.background = 'rgb(231, 192, 15)';
//     }
//     if(password ==''){
//         sel('.password').style.background = 'rgb(243, 18, 18)';
//     }
//     else if(password!=''){
//         sel('.password').style.background = 'rgb(231, 192, 15)';
//     }

// })
form.personButton.addEventListener('click', function(){
    let name = /^[a-zA-Z]{2,20}$/; 
    console.log(name.test(`${form.personName.value}`));
    if(name.test(`${form.personName.value}`) ==false){
        sel('.name').style.background = 'rgb(243, 18, 18)';
    }
    else{
        sel('.name').style.background = 'rgb(231, 192, 15)';
    }
})

form.personButton.addEventListener('click', function(){
    let second = /^[a-zA-Z]{2,20}$/; 
    console.log(second.test(`${form.personSecond.value}`));
    if(second.test(`${form.personSecond.value}`) ==false){
        sel('.second').style.background = 'rgb(243, 18, 18)';
    }
    else{
        sel('.second').style.background = 'rgb(231, 192, 15)';
    }
})

form.personButton.addEventListener('click', function(){
    let email =  /^[\d\.\w\s]{2,20}@[\d\.\w\s]{2,20}\.(((net)|(org))\.(ua))|((gmail)\.(com))$/;
    console.log(email.test(`${form.personEmail.value}`));
    if(email.test(`${form.personEmail.value}`) ==false){
        sel('.email').style.background = 'rgb(243, 18, 18)';
    }
    else{
        sel('.email').style.background = 'rgb(231, 192, 15)';
    }
})

form.personButton.addEventListener('click', function(){
    let number = /^\+380\(0[678]3)\-\d{3}\-\d{2}\-\d{2}$/; 
    console.log(number.test(`${form.personNumber.value}`));
    if(number.test(`${form.personNumber.value}`) ==false){
        sel('.number').style.background = 'rgb(243, 18, 18)';
    }
    else{
        sel('.number').style.background = 'rgb(231, 192, 15)';
    }
})

form.personButton.addEventListener('click', function(){
    let password = /^[a-zA-Z0-9]{8,15}$/; 
    console.log(password.test(`${form.personPassword.value}`));
    if(password.test(`${form.personPassword.value}`) ==false){
        sel('.password').style.background = 'rgb(243, 18, 18)';
    }
    else{
        sel('.password').style.background = 'rgb(231, 192, 15)';
    }
})