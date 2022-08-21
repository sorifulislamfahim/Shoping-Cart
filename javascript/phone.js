
function updatePhoneNumber(isIncrease){
    const phoneNumberFiled = document.getElementById('phone-number-filed');
    const phonePriviousNumberString = phoneNumberFiled.value;
    const phonePriviousNumber = parseInt(phonePriviousNumberString);
    
    let newPhoneNumber; 
    if(isIncrease){
        newPhoneNumber = phonePriviousNumber + 1;
    }
    else{
        newPhoneNumber = phonePriviousNumber - 1;
    }
    phoneNumberFiled.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtotal();
})


document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtotal();
})