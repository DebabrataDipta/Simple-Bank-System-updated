document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawAmount);

    
})