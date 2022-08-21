// step 1: Get the id from input button and then add a event lisnter

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the input data from input field using a variable
    // step 2.a: get the value of input data
    const depositInputValue = document.getElementById('deposit-amount');
    const newDepositValue = parseFloat(depositInputValue.value);
    // console.log(newDepositValue);
    
    // step 3: Get the deposit number view-data using an id
    // step 3.a: get the inner data of that deposit using .innerText
    const depositView = document.getElementById('deposit-view'); 
    const previousDepositAmount = parseFloat(depositView.innerText);
    // console.log(previousDepositAmount);
    
    // step 4: Sum the previous deposit with new deposti amount
    const currentDepositAmount = newDepositValue + previousDepositAmount;
    console.log(currentDepositAmount);

    // step 5: swap the innertext of the deposit view with new deposit ammount
    depositView.innerText = currentDepositAmount;
    
    // step 7: clear the deposit input field
    depositInputValue.value = '';


});