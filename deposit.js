document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = ' ';
    
    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositAmountString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    previousDeposit.innerText = currentDepositAmount;

    // get the balance total 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const newBalanceTotal = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
})