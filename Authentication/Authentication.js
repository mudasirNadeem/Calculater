var userEmail = JSON.parse(localStorage.getItem('userEmail')) || [];
var userPassword = JSON.parse(localStorage.getItem('userPassword')) || [];
function signUp() {
    var signUp_FirstName = document.getElementById('signup-FirstName').value;
    var signUp_LastName = document.getElementById('signup-LastName').value;
    var signUp_Email = document.getElementById('signup-Email').value;
    var signUp_Password = document.getElementById('signup-password').value;
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';
    if (signUp_Password.length <= 0) {
        errorMessage.innerHTML = 'Please Enter Your Password';
    } else if (signUp_Password.length < 6) {
        errorMessage.innerHTML = 'Password must be greater than 6 characters';
    } else if (signUp_Email && signUp_Password) {
        if (userEmail.includes(signUp_Email)) {
            errorMessage.innerHTML = 'Email already exists. Please use a different email or sign in.';
        } else {
            userEmail.push(signUp_Email);
            userPassword.push(signUp_Password);
            localStorage.setItem('userEmail', JSON.stringify(userEmail));
            localStorage.setItem('userPassword', JSON.stringify(userPassword));
            window.location.href = 'Discription.html';
        }
        document.getElementById('signup-FirstName').value = '';
        document.getElementById('signup-LastName').value = '';
        document.getElementById('signup-Email').value = '';
        document.getElementById('signup-password').value = '';
    }
}
function signIn(){
    var login_Email = document.getElementById('login-Email').value
    var login_Password = document.getElementById('login-Password').value
    var errorMessages = document.getElementById('errorMessages')
    var userEmailIndex = userEmail.indexOf(login_Email );
    var loginuserPassword = userPassword.indexOf(login_Password);
    if(userEmailIndex === -1 ){
        errorMessages.innerHTML = 'Your email is not registered. You will need to create account.';
    }
    else if(loginuserPassword === -1 ){
        errorMessages.innerHTML = 'Password is wrong'
    }
    else{
       window.location.href = 'Discription.html';
    }
}
function rest() {
    var restEmail = document.getElementById('restEmail').value;
    var newPassword = document.getElementById('new-password').value;
    if (userEmail.includes(restEmail)) {
            var emailIndex = userEmail.indexOf(restEmail);
            userPassword[emailIndex] = newPassword;
            localStorage.setItem('userPassword', JSON.stringify(userPassword));
            window.location.href = 'Login.html';
    } else {
        alert('Email not found');
    }
}
