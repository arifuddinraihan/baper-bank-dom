// step 1: Get the id from input button and then add a event lisnter

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the input data from input field using a variable
    // step 2.a: get the value of input data
    const depositInputValue = document.getElementById('deposit-amount');
    const newDepositValue = parseFloat(depositInputValue.value);
    // console.log(typeof newDepositValue);
    // step 7: clear the deposit input field
    depositInputValue.value = '';

    // step 3: Get the deposit number view-data using an id
    // step 3.a: get the inner data of that deposit using .innerText
    const depositView = document.getElementById('deposit-view'); 
    const previousDepositAmount = parseFloat(depositView.innerText);
    // console.log(typeof previousDepositAmount);
    
    // step 4: Sum the previous deposit with new deposti amount
    const currentDepositAmount = newDepositValue + previousDepositAmount;
    // console.log(typeof currentDepositAmount);

    // step 5: swap the innertext of the deposit view with new deposit ammount
    depositView.innerText = currentDepositAmount;
    
    const balanceText = document.getElementById('total-view');
    const previousBalace = parseFloat(balanceText.innerText);
    
    const newBalance = previousBalace + newDepositValue;
    // console.log(newBalance);

    balanceText.innerText = newBalance;
    // console.log(previousBalace);

});


document.getElementById('btn-withdraw').addEventListener('click', ()=>{

    const withdrawInputText = document.getElementById('withdraw-amount');
    const withdrawValueInputString = withdrawInputText.value;
    const newWithdrawInput = parseFloat(withdrawValueInputString);
    withdrawInputText.value = '';
    // console.log(newWithdrawInput);

    if(isNaN(newWithdrawInput)){
        alert("Please provide a valid number!")
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-view');
    const withdrawViewString = withdrawAmount.innerText;
    const previousWithdraw = parseFloat(withdrawViewString);
    // console.log(withdrawView);

    const balanceText = document.getElementById('total-view');
    const previousBalace = parseFloat(balanceText.innerText);

    const newBalance = previousBalace - newWithdrawInput;
    // console.log(newBalance);

    if (previousBalace < newWithdrawInput){
        alert("Your withdrawing more than balace");
        return;
    }

    const newWithdraw = newWithdrawInput + previousWithdraw;
    // console.log(newWithdraw);

    withdrawAmount.innerText = newWithdraw;


    balanceText.innerText = newBalance;
    // console.log(previousBalace);


});