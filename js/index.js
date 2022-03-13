let firstSelectedOption = document.querySelector("#currencyTypeFirst");
let secondSelectedOption = document.querySelector("#currencyTypeSecond");
let buttonExchange = document.querySelector(".exchangeBtn");
let fromCurrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");

function exchangeValue(selectedOption) {
    currencyDropList = document.querySelectorAll("#" + selectedOption)[0];
    for (let i = 0; i < currencyDropList.length; i++) {
        }
}

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

let reverseButton = document.querySelector(".reverseButton");
reverseButton.addEventListener("click", function() {
    let depoValue = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = depoValue;
    setFlag(fromCurrency);
    setFlag(toCurrency);
    exchangeRate();
});

function exchangeRate() {
    let amount = document.querySelector("#amountValue");
    let amountValue = amount.value;
    let exchangeResult = document.querySelector(".resultExchange p");
    exchangeResult.innerHTML = amountValue + ' ' + fromCurrency.value + ' = ' + ((amountValue / exchangeValues[toCurrency.value]) * exchangeValues[fromCurrency.value]).toFixed(2) + ' ' + toCurrency.value;

}