let firstSelectedOption =$("#currencyTypeFirst")[0];
let secondSelectedOption = $("#currencyTypeSecond")[0];
let buttonExchange = $(".exchangeBtn")[0];
let fromCurrency = $(".from select")[0];
let toCurrency = $(".to select")[0];

// Check all the option from select
function exchangeValue(selectedOption) {
    currencyDropList = $("#" + selectedOption)[0];
    for (let i = 0; i < currencyDropList.length; i++) {
        }
}
// Change the flag from select option
firstSelectedOption.addEventListener("change", function(event){
    setFlag(event.target);
});

secondSelectedOption.addEventListener("change", function(event){
    setFlag(event.target);
});

function setFlag(element) {
    for(code in countryCode) {
        if(code === element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `images/${code}.png`;
    }
}

}

buttonExchange.addEventListener("click", function() {
    exchangeRate();
});

// Reverse the values, currencies and flags
let reverseButton = $(".reverseButton")[0];
reverseButton.addEventListener("click", function() {
    let depoValue = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = depoValue;
    setFlag(fromCurrency);
    setFlag(toCurrency);
    exchangeRate();
});

function exchangeRate() {
    let amount = $("#amountValue")[0];
    let amountValue = amount.value;
    let exchangeResult = document.querySelector(".resultExchange p");

    // Check if the amount value is a number
    if(isNaN(amountValue) !== true && amountValue > 0) {

        let apiKey = "d0648519dc95b94dd9838ce0";
        let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
        fetch(url).then(response => response.json()).then(result => {
            
        // Exchange formula
        exchangeResult.innerHTML = amountValue + ' ' + fromCurrency.value + ' = ' + ((amountValue / result.conversion_rates[fromCurrency.value]) * result.conversion_rates[toCurrency.value]).toFixed(2) + ' ' + toCurrency.value;
        });
            
        // If the amount value doesn't equal with a number, select the value 1 as default
    } else {
        amount.value = 1;
    }
}


