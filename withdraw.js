document.getElementById('withdraw-btn').addEventListener('click', function(){
    // console.log('Clicked');
    const withDrawUserValue = document.getElementById('withdraw-field').value;
    const withDrawValue = parseFloat(withDrawUserValue);
    // console.log(withDrawValue);
    let withdrawUpValue = document.getElementById('withdraw-up-value').innerText;
    const withdrawUpvalueToNumber = parseFloat(withdrawUpValue);
    console.log(withdrawUpvalueToNumber);
    const totalWithdraw = withDrawValue + withdrawUpvalueToNumber;
    console.log(withdrawUpValue);
    let upBalance = document.getElementById('balnce-up-value');
    document.getElementById('withdraw-field').value = '';

    if (totalWithdraw > upBalance.innerText) {
        alert('Baper bank a eto taka nai')
        return;
    }
    document.getElementById('withdraw-up-value').innerText = totalWithdraw;

    // ! Blance Update
    const upBalanceToNumber = parseFloat(upBalance.innerText);
    const totalBalance = upBalanceToNumber - totalWithdraw;
    document.getElementById('balnce-up-value').innerText = totalBalance;
    // console.log(document.getElementById('withdraw-up-value').innerText);
})