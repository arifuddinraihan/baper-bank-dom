// 1. add one addEventListener into submit button 

document.getElementById('button').addEventListener('click', function(){
    // 2. get the user email by using .value as a text result
    // 2.a: set email by id
    // 2.b: get email/element by using id
    // 2.c: get the value from element/email
    
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    
    // 3. get the user Password by using .value as a text result
    // 3.a: set Password by id
    // 3.b: get Password/element by using id
    // 3.c: get the value from element/Password

    const passField = document.getElementById('user-password');
    const password = passField.value;
    
    // DANGER: We will not use this system in future

    if ( email === "arif@gmail.com" && password === "secrate"){
        window.location.href = 'bank.html';
    }
    else {
        alert("Please see your email, it's not your father's son!")
    }
    
})