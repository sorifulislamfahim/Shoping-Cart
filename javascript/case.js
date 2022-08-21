

function updateCaseNumber(isIncrease){
    const caseNumberFiled = document.getElementById('case-number-filed');
    const casePriviousNumberString = caseNumberFiled.value;
    const casePriviousNumber = parseInt(casePriviousNumberString);
    
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = casePriviousNumber + 1;
    }
    else{
        newCaseNumber = casePriviousNumber - 1;
    }

    caseNumberFiled.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('case-plus-btn').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber);
   calculateSubtotal();
})


document.getElementById('case-minus-btn').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(false);
   
    updateCaseTotalPrice(newCaseNumber);
    calculateSubtotal();
})