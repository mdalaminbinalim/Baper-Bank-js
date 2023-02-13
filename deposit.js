document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');

    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + NewDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal + NewDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositField.value = '';
})