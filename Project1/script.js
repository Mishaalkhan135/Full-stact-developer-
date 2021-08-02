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
//This is a event listner for form on submit button
form.addEventListener('submit',function(e){
    //To stop the page from reloading 
    e.preventDefault();
    
    if(username.value === '' ){
        showError(username,'Username is required');
    } else{
        showSuccess(username);
    }

    if(email.value === '' ){
        showError(email,'Email is required');
    } else if(!isValidEmail(email.value)){
        showError(email,'Email is invalid');
    } else{
        showSuccess(email);
    }

    if(address.value === '' ){
        showError(address,'Address is required');
    } else{
        showSuccess(address);
    }

    if(contact.value === '' ){
        showError(contact,'Contact is required');
    } else{
        showSuccess(contact);
    }

    if(password.value === '' ){
        showError(password,'Password is required');
    } else{
        showSuccess(password);
    }

    if(password2.value === '' ){
        showError(password2,'Confirm Password is required');
    } else{
        showSuccess(password2);
    }
})