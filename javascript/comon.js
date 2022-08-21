

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


function calculateSubtotal(){
    // calculate Sub Total 
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currrentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currrentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal)

    // calculate Text Amount 
    const textAmountString = (currentSubTotal * 0.1).toFixed(2);
    const textAmount = parseFloat(textAmountString);
    setTextElementValueById('text-amount', textAmount);

    // calculate total 
    const currentFinalAmount = textAmount + currentSubTotal;
    setTextElementValueById('final-total', currentFinalAmount);
}
