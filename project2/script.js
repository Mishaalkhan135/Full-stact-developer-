const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const contact = document.getElementById('contact');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    //get the parent element of input field(.form-control)
    const formControl = input.parentElement;
    //Override the class - add error
    formControl.className = 'form-control error'
    //Get the smaal element for the error message
    const small = formControl.querySelector('small');
    //Overide the the message
    small.innerText = message;

}
//function to apdate class for success
function showSuccess(input) {
    //get the parent element of input field(.form-control)
    const formControl = input.parentElement;
      //Override the class - add success
    formControl.className = 'form-control success';
}


//eventlistner
//create event listner for  submit buttotn
form.addEventListener('submit', function(e) {
    //stop page for reloading
    e.preventDefault();
    //check if user name is empty
    if(username.value === ''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
     }
     if(email.value === ''){
        showError(email,'Email is required');
    }else{
        showSuccess(email);
     }
     if(address.value === ''){
        showError(address,'Adress is required');
    }else{
        showSuccess(address);
     }
     if(contact.value === ''){
        showError(contact,'Contact no  is required');
    }else{
        showSuccess(contact);
     }
     if(password.value === ''){
        showError(password,'Password is required');
    }else{
        showSuccess(password);
     }
     if(password2.value === ''){
        showError(password2,'ConformPassword is required');
    }else{
        showSuccess(password2);
     }

});