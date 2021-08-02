const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const contact = document.getElementById('contact');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//All functions
//function to show error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//function to show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//function to check if emmail is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//function to check if require feilds have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === '' ){
            console.log(input.id);
            showError(input,`${getFieldId(input)} is required`);
        } else{
            showSuccess(input);
        }
    });
}
//function to get the id of the inputFeild with proper case
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//This is a event listner for form on submit button
form.addEventListener('submit',function(e){
    //To stop the page from reloading 
    e.preventDefault();
    
    checkRequired([username,email,address,contact,password,password2]);
})