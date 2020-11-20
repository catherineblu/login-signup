const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }else{
        //success
        setSuccessFor(username);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement; //form control div
    const small = formControl.querySelector('small');
    small.innerText = message;
    //add error class

    formControl.className = 'form-control error';
}
