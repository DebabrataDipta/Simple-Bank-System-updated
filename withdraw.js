document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawTotalAmountString = withdrawField.value;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);

    withdrawField.value='';

    const withdrawAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const totalWithdrawAmount = previousWithdrawAmount + withdrawTotalAmount;
    withdrawAmount.innerText = totalWithdrawAmount;

    // get the balance total 
    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - withdrawTotalAmount;
    balanceTotal.innerText = newBalanceTotal;
})