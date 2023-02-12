document.getElementById('withdraw-btn').addEventListener('click', function(){
    // console.log('Clicked');
    const withDrawUserValue = document.getElementById('withdraw-field').value;
    const withDrawValue = parseFloat(withDrawUserValue);
    // console.log(withDrawValue);
    let withdrawUpValue = document.getElementById('withdraw-up-value').innerText;
    const withdrawUpvalueToNumber = parseFloat(withdrawUpValue);
    console.log(withdrawUpvalueToNumber);
    const totalWithdraw = withDrawValue + withdrawUpvalueToNumber;
    document.getElementById('withdraw-up-value').innerText = totalWithdraw
    console.log(withdrawUpValue);
    let upBalance = document.getElementById('balnce-up-value');
    const upBalanceToNumber = parseFloat(upBalance.innerText);
    const totalBalance = upBalanceToNumber - totalWithdraw;
    document.getElementById('balnce-up-value').innerText = totalBalance;
    document.getElementById('withdraw-field').value = '';
    console.log(document.getElementById('withdraw-up-value').innerText);
})