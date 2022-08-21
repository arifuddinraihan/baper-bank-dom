// step 1: Get the id from input button and then add a event lisnter

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the input data from input field using a variable
    const depositInputValue = document.getElementById('deposit-amount');
    // step 2.a: get the value of input data
    const depositValue = parseFloat(depositInputValue.value).toFixed(2);
    // step 3: Get the deposit number view-data using an id
    const depositView = document.getElementById("deposit-view");
    // step 3.a: get the inner data of that deposit using .innerText 
    const depositViewAmount = parseFloat(depositView.innerText).toFixed(2);
    
    // step 4: swap the input field with deposti value that you inputed
    depositView.innerText = depositValue;
    
    // step 7: clear the deposit input field
    depositInputValue.value = '';


});