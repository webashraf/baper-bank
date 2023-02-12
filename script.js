//  Login page script --------------------------------
document.getElementById('submitButton').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == 'aliashraftamim@gmail.com' && password == '10612619tam') {
        console.log('Valid User');
        window.location.href = 'bank.html'
    }
    else{
        alert('Wrong Email or Password')
    }
    // console.log(email, password);
})
// -------------------------------------------------------

