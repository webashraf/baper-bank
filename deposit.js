const depositBtn = document.getElementById('deposit-btn');
let previusDepositUpValue = document.getElementById('deposit-up-value');
let previusBalanceUpValue = document.getElementById('balnce-up-value');
// console.log(previusDepositUpValue);

function stringToNumber(str){
    return parseFloat(str)
}
// function updateAmount(amount){

// }
depositBtn.addEventListener('click', function(){
    // ! Deposit value scripts
    const depositFild = document.getElementById('deposit-fild');
    const depositValue = stringToNumber(depositFild.value);
    console.log(typeof depositValue);
    if (typeof depositValue === 'string') {
        previusDepositUpValue.innerText = depositValue + 0;
    }
    else {
        let depositUpUpdateValue = previusDepositUpValue.innerText;
        // console.log(depositUpUpdateValue);
        const totalValue = depositValue + stringToNumber(depositUpUpdateValue);
        previusDepositUpValue.innerText = totalValue;
        // console.log(totalValue)
        // ! Desposit value scripts end
        // ! Balance Value Update
        let blanceUpUpdateValue = previusBalanceUpValue.innerText;
        previusBalanceUpValue.innerText =  stringToNumber(depositValue) + stringToNumber(blanceUpUpdateValue);
        // console.log(previusBalanceUpValue);
        // !Balance end
        depositFild.value = '';
    }


})