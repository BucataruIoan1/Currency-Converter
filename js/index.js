let inputElement = document.querySelector('#amountValue');
let resultFirstElement = document.querySelector('.resultExchange p');
let reverseButtonElement = $(".reverseButton")[0];

// Define the value of currency

let ronValue = $(".ron");
ronValue = 1;
let dollarValue = $(".dollar");
dollarValue = 4.4218;
let euroValue = $(".euro");
euroValue = 4.9480;
let poundValue = $(".pound");
poundValue = 5.9187;
let francValue = $(".franc");
francValue = 4.7957;
let canadianValue = $(".canadian");
canadianValue = 3.4677;
let yenValue = $(".yen");
yenValue = 0.0386;
let yuanValue = $(".yuan");
yuanValue = 0.7011;
let rupeeValue = $(".rupee");
rupeeValue = 0.0587;
let roubleValue = $(".rouble");
roubleValue = 0.045;
let levValue = $(".lev");
levValue = 2.5298;
let korunaValue = $(".koruna");
korunaValue = 0.1981;
let forintValue = $(".forint");
forintValue = 0.0135;
let zlotyValue = $(".zloty");
zlotyValue = 1.0562;


// Introduce a value and clear Amount Value Input

document.querySelector(".exchangeBtn").addEventListener("click", function() {
       
    checkNumberInput();

});

document.addEventListener("keydown", function(event) {
       
    if(event.keyCode === 13) {

        checkNumberInput();

    };

});

// Show the Flag that has been selected

let selectTagElement = document.querySelector("#currencyTypeFirst").addEventListener("click", function() {
    let optionElement = document.querySelectorAll('#currencyTypeFirst option');
     for (let i = 0; i < optionElement.length; i++) {

        showFlag(optionElement, '.flagFirst', 0, 1, 2);
    
    }       
});

let selectTagSecondElement = document.querySelector("#currencyTypeSecond").addEventListener("click", function() {
    let optionSecondElement = document.querySelectorAll('#currencyTypeSecond option');
     for (let i = 0; i < optionSecondElement.length; i++) {

        showFlag(optionSecondElement, '.flagSecond', 1, 2, 0);
        
    }
});

// Check the input and apeal the 'calculateCurrency' function

function checkNumberInput() {

    let checkNumber = Number(inputElement.value);

    if(isNaN(checkNumber) !== true && checkNumber > 0) {

        calculateCurrency(".ron", ronValue);
        calculateCurrency(".dollar", dollarValue);
        calculateCurrency(".euro", euroValue);
        calculateCurrency(".pound", poundValue);
        calculateCurrency(".franc", francValue);
        calculateCurrency(".canadian", canadianValue);
        calculateCurrency(".yen", yenValue);
        calculateCurrency(".yuan", yuanValue);
        calculateCurrency(".rupee", rupeeValue);
        calculateCurrency(".rouble", roubleValue);
        calculateCurrency(".lev", levValue);
        calculateCurrency(".koruna", korunaValue);
        calculateCurrency(".forint", forintValue);
        calculateCurrency(".zloty", zlotyValue);

    } else {
        inputElement.value = '';
        resultFirstElement.innerHTML = '';
    }

    inputElement.value = '';
    
}

// Select the FLAG

function showFlag(optionElement, flag, index0, index1, index2) {

    let flagElement = document.querySelector(flag);

    if (optionElement[index0].selected === true) { 
        flagElement.setAttribute("src", "images/RON.png");
    }
    else if (optionElement[index1].selected === true) {  
        flagElement.setAttribute("src", "images/USD.png");
    }
    else if (optionElement[index2].selected === true) {  
        flagElement.setAttribute("src", "images/EUR.png");
    }
    else if (optionElement[3].selected === true) {  
        flagElement.setAttribute("src", "images/GBP.png");
    }
    else if (optionElement[4].selected === true) {  
        flagElement.setAttribute("src", "images/CHF.png");
    }
    else if (optionElement[5].selected === true) {  
        flagElement.setAttribute("src", "images/CAD.png");
    }
    else if (optionElement[6].selected === true) {  
        flagElement.setAttribute("src", "images/JPY.png");
    }
    else if (optionElement[7].selected === true) {  
        flagElement.setAttribute("src", "images/CNY.png");
    }
    else if (optionElement[8].selected === true) {  
        flagElement.setAttribute("src", "images/INR.png");
    }
    else if (optionElement[9].selected === true) {  
        flagElement.setAttribute("src", "images/RUB.png");
    }
    else if (optionElement[10].selected === true) {  
        flagElement.setAttribute("src", "images/BGN.png");
    }
    else if (optionElement[11].selected === true) {  
        flagElement.setAttribute("src", "images/CZK.png");
    }
    else if (optionElement[12].selected === true) {  
        flagElement.setAttribute("src", "images/HUF.png");
    }
    else if (optionElement[13].selected === true) {  
        flagElement.setAttribute("src", "images/PLN.png");
    }

}

// Calculate the Currency Values and Reverse then

function calculateCurrency(currency, currencyValue) {

let inputValue = inputElement.value;

    if ($(currency)[0].selected === true && $(".euro")[1].selected === true) {
    resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / euroValue) * currencyValue).toFixed(3) +  ' ' + $(".euro")[0].innerHTML;
    reverseButtonElement.addEventListener("click", function() {
        resultFirstElement.innerHTML = inputValue + ' ' + $('.euro')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * euroValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
    });    
    }
    else if ($(currency)[0].selected === true && $(".ron")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / ronValue) * currencyValue).toFixed(3) +  ' ' + $(".ron")[0].innerHTML; 
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.ron')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * ronValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".dollar")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / dollarValue) * currencyValue).toFixed(3) +  ' ' + $(".dollar")[0].innerHTML; 
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.dollar')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * dollarValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".pound")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / poundValue) * currencyValue).toFixed(3) +  ' ' + $(".pound")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.pound')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * poundValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".franc")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / francValue) * currencyValue).toFixed(3) +  ' ' + $(".franc")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.franc')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * francValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".canadian")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / canadianValue) * currencyValue).toFixed(3) +  ' ' + $(".canadian")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.canadian')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * canadianValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".yen")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / yenValue) * currencyValue).toFixed(3) +  ' ' + $(".yen")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.yen')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * yenValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".yuan")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / yuanValue) * currencyValue).toFixed(3) +  ' ' + $(".yuan")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.yuan')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * yuanValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".rupee")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / rupeeValue) * currencyValue).toFixed(3) +  ' ' + $(".rupee")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.rupee')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * rupeeValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".rouble")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / roubleValue) * currencyValue).toFixed(3) +  ' ' + $(".rouble")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.rouble')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * roubleValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".lev")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / levValue) * currencyValue).toFixed(3) +  ' ' + $(".lev")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.lev')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * levValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".koruna")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / korunaValue) * currencyValue).toFixed(3) +  ' ' + $(".koruna")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.koruna')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * korunaValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".forint")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / forintValue) * currencyValue).toFixed(3) +  ' ' + $(".forint")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.forint')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * forintValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }
    else if ($(currency)[0].selected === true && $(".zloty")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / zlotyValue) * currencyValue).toFixed(3) +  ' ' + $(".zloty")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.zloty')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * zlotyValue).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        });  
    }

}

