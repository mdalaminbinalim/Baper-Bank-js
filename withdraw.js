document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = WithdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const currentWithdrawTotal = previousWithdraw + newWithdrawAmount;
    WithdrawTotalElement = currentWithdrawTotal;

    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    withdrawField.value = '';
})