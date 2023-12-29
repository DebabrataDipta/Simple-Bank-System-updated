document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-total');
    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', currentDepositAmount);

    const balanceTotal = getElementValueById('balance-total');
    const newBalance = balanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalance);  
})