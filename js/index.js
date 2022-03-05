let inputElement = $('#amountValue')[0];
let resultFirstElement = $('.resultExchange p')[0];
let reverseButtonElement = $(".reverseButton")[0];

// Define the value of currency

//                   RON   USD    EUR     GBP      CHF     CAD     YEN     YUAN    INR    RUB     LEV     CZK     HUF     PLN  
//                    =     =      =       =        =       =       =       =       =      =       =       =       =       =
let currencyValues = [1, 4.4218, 4.9480, 5.9187, 4.7957, 3.4677, 0.0386, 0.7011, 0.0587, 0.045, 2.5298, 0.1981, 0.0135, 1.0562];


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

        calculateCurrency(".ron", currencyValues[0]);
        calculateCurrency(".dollar", currencyValues[1]);
        calculateCurrency(".euro", currencyValues[2]);
        calculateCurrency(".pound", currencyValues[3]);
        calculateCurrency(".franc", currencyValues[4]);
        calculateCurrency(".canadian", currencyValues[5]);
        calculateCurrency(".yen", currencyValues[6]);
        calculateCurrency(".yuan", currencyValues[7]);
        calculateCurrency(".rupee", currencyValues[8]);
        calculateCurrency(".rouble", currencyValues[9]);
        calculateCurrency(".lev", currencyValues[10]);
        calculateCurrency(".koruna", currencyValues[11]);
        calculateCurrency(".forint", currencyValues[12]);
        calculateCurrency(".zloty", currencyValues[13]);

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
        // content = document.querySelector("#currencyTypeFirst .zloty").innerHTML = 'PLN';
    }

    return flagElement;

}

// Calculate the Currency Values and Reverse then

function calculateCurrency(currency, currencyValue) {

let inputValue = inputElement.value;

    if ($(currency)[0].selected === true && $(".euro")[1].selected === true) {

    // Calculate the value of currency

    resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[2]) * currencyValue).toFixed(3) +  ' ' + $(".euro")[0].innerHTML;
    
    // Reverse the value of currency

    reverseButtonElement.addEventListener("click", function() {
        resultFirstElement.innerHTML = inputValue + ' ' + $('.euro')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[2]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
    
            // Change the flag

            reverseFlag()
    
    });  
    }
    else if ($(currency)[0].selected === true && $(".ron")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[0]) * currencyValue).toFixed(3) +  ' ' + $(".ron")[0].innerHTML; 
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.ron')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[0]).toFixed(3) + ' ' + $(currency)[0].innerHTML;

            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".dollar")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[1]) * currencyValue).toFixed(3) +  ' ' + $(".dollar")[0].innerHTML; 
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.dollar')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[1]).toFixed(3) + ' ' + $(currency)[0].innerHTML;

            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".pound")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[3]) * currencyValue).toFixed(3) +  ' ' + $(".pound")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.pound')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[3]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".franc")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[4]) * currencyValue).toFixed(3) +  ' ' + $(".franc")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.franc')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[4]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".canadian")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[5]) * currencyValue).toFixed(3) +  ' ' + $(".canadian")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.canadian')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[5]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".yen")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[6]) * currencyValue).toFixed(3) +  ' ' + $(".yen")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.yen')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[6]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
            
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".yuan")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[7]) * currencyValue).toFixed(3) +  ' ' + $(".yuan")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.yuan')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[7]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
            
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".rupee")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[8]) * currencyValue).toFixed(3) +  ' ' + $(".rupee")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.rupee')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[8]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".rouble")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[9]) * currencyValue).toFixed(3) +  ' ' + $(".rouble")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.rouble')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[9]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()

        });  
    }
    else if ($(currency)[0].selected === true && $(".lev")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[10]) * currencyValue).toFixed(3) +  ' ' + $(".lev")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.lev')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[10]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".koruna")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[11]) * currencyValue).toFixed(3) +  ' ' + $(".koruna")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.koruna')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[11]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".forint")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[12]) * currencyValue).toFixed(3) +  ' ' + $(".forint")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.forint')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[12]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()
        });  
    }
    else if ($(currency)[0].selected === true && $(".zloty")[1].selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[13]) * currencyValue).toFixed(3) +  ' ' + $(".zloty")[0].innerHTML;
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + $('.zloty')[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[13]).toFixed(3) + ' ' + $(currency)[0].innerHTML;
        
            // Change the flag

            reverseFlag()

        });  
    }

}

function reverseFlag() {
    
    let optionElement = document.querySelectorAll('#currencyTypeFirst option');
    let firstFlagChange = showFlag(optionElement, '.flagFirst', 0, 1, 2);
    let srcFirstFlag = firstFlagChange.getAttribute("src");

    let optionSecondElement = document.querySelectorAll('#currencyTypeSecond option');
    let flagSecondElement = showFlag(optionSecondElement, '.flagSecond', 1, 2, 0); 
    let srcSecondFlag = flagSecondElement.getAttribute("src"); 
    let srcDepoValue = srcSecondFlag;

    flagSecondElement.setAttribute("src", srcFirstFlag);
    firstFlagChange.setAttribute("src", srcDepoValue);
    
 
}
