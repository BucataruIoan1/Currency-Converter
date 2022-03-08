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

// Calculate the Currency Values and Reverse then

function calculateCurrency(currency, currencyValue) {

let inputValue = inputElement.value;

    if ($(currency)[0].selected === true && $(".euro")[1].selected === true) {

    // Calculate the value of currency

    resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[2]) * currencyValue).toFixed(3) +  ' ' + $(".euro")[0].innerHTML;
    
    // Reverse the value of currency

    reverseButtonElement.addEventListener("click", function() {
        resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[2]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
    
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
    });  
    }
    else if ($(currency)[0].selected === true && $(".ron")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[0]) * currencyValue).toFixed(3) +  ' ' + $(".ron")[0].innerHTML; 
        
        // Reverse the value of currency

        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[0]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;

            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".dollar")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[1]) * currencyValue).toFixed(3) +  ' ' + $(".dollar")[0].innerHTML; 
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[1]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;

            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".pound")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[3]) * currencyValue).toFixed(3) +  ' ' + $(".pound")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[3]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".franc")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[4]) * currencyValue).toFixed(3) +  ' ' + $(".franc")[0].innerHTML;
        
        // Reverse the value of currency    
    
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[4]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".canadian")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[5]) * currencyValue).toFixed(3) +  ' ' + $(".canadian")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[5]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".yen")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[6]) * currencyValue).toFixed(3) +  ' ' + $(".yen")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[6]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
            
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".yuan")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[7]) * currencyValue).toFixed(3) +  ' ' + $(".yuan")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[7]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
            
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".rupee")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[8]) * currencyValue).toFixed(3) +  ' ' + $(".rupee")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[8]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".rouble")[1].selected === true) {
        
        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[9]) * currencyValue).toFixed(3) +  ' ' + $(".rouble")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[9]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });

        });  
    }
    else if ($(currency)[0].selected === true && $(".lev")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[10]) * currencyValue).toFixed(3) +  ' ' + $(".lev")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[10]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".koruna")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[11]) * currencyValue).toFixed(3) +  ' ' + $(".koruna")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[11]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
    
        });  
    }
    else if ($(currency)[0].selected === true && $(".forint")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[12]) * currencyValue).toFixed(3) +  ' ' + $(".forint")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[12]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });
        });  
    }
    else if ($(currency)[0].selected === true && $(".zloty")[1].selected === true) {

        // Calculate the value of currency

        resultFirstElement.innerHTML = inputElement.value + ' ' + $(currency)[0].innerHTML + ' = ' + ((inputElement.value / currencyValues[13]) * currencyValue).toFixed(3) +  ' ' + $(".zloty")[0].innerHTML;
        
        // Reverse the value of currency
        
        reverseButtonElement.addEventListener("click", function() {
            resultFirstElement.innerHTML = inputValue + ' ' + reverseFlag()[0].innerHTML + ' = ' + ((inputValue / currencyValue) * currencyValues[13]).toFixed(3) + ' ' + reverseFlag()[1].innerHTML;
        
            // Change the flag

            reverseFlag();
            $('#amountValue')[0].addEventListener("click", function() {
                resetValues();
            });

        });  
    }

}

// REVERSE THE FLAG AND ABBREVIATION

function reverseFlag() {

    let optionArray = [];
    
    let optionElement = document.querySelectorAll('#currencyTypeFirst option');
    let firstFlagChange = showFlag(optionElement, '.flagFirst', 0, 1, 2)[0];
    let firstAbbrevChange = showFlag(optionElement, '.flagFirst', 0, 1, 2)[1]


    let optionSecondElement = document.querySelectorAll('#currencyTypeSecond option');
    let flagSecondElement = showFlag(optionSecondElement, '.flagSecond', 1, 2, 0)[0]; 
    let secondAbbrevChange = showFlag(optionSecondElement, '.flagSecond', 1, 2, 0)[1];

    // Change the FLAG

    let srcDepo = firstFlagChange.getAttribute("src");
    let srcSecondFlag = flagSecondElement.getAttribute("src"); 
    firstFlagChange.setAttribute("src", srcSecondFlag);
    srcSecondFlag = flagSecondElement.setAttribute("src", srcDepo);

    // RESET INITIAL VALUES

    document.querySelector("#currencyTypeFirst").addEventListener("click", function() {
        
        document.querySelectorAll('#currencyTypeFirst option')[0].innerHTML = "RON";
        document.querySelectorAll('#currencyTypeFirst option')[1].innerHTML = 'USD';
        document.querySelectorAll('#currencyTypeFirst option')[2].innerHTML = 'EUR';
        document.querySelectorAll('#currencyTypeFirst option')[3].innerHTML = 'GBP';
        document.querySelectorAll('#currencyTypeFirst option')[4].innerHTML = 'CHF';
        document.querySelectorAll('#currencyTypeFirst option')[5].innerHTML = 'CAD';
        document.querySelectorAll('#currencyTypeFirst option')[6].innerHTML = 'JPY';
        document.querySelectorAll('#currencyTypeFirst option')[7].innerHTML = 'CNY';
        document.querySelectorAll('#currencyTypeFirst option')[8].innerHTML = 'INR';
        document.querySelectorAll('#currencyTypeFirst option')[9].innerHTML = 'RUB';
        document.querySelectorAll('#currencyTypeFirst option')[10].innerHTML = 'BGN';
        document.querySelectorAll('#currencyTypeFirst option')[11].innerHTML = 'CZK';
        document.querySelectorAll('#currencyTypeFirst option')[12].innerHTML = 'HUF';
        document.querySelectorAll('#currencyTypeFirst option')[13].innerHTML = 'PLN';

    });
    
    document.querySelector("#currencyTypeSecond").addEventListener("click", function() {

        document.querySelectorAll('#currencyTypeSecond option')[0].innerHTML = "EUR";
        document.querySelectorAll('#currencyTypeSecond option')[1].innerHTML = 'RON';
        document.querySelectorAll('#currencyTypeSecond option')[2].innerHTML = 'USD';
        document.querySelectorAll('#currencyTypeSecond option')[3].innerHTML = 'GBP';
        document.querySelectorAll('#currencyTypeSecond option')[4].innerHTML = 'CHF';
        document.querySelectorAll('#currencyTypeSecond option')[5].innerHTML = 'CAD';
        document.querySelectorAll('#currencyTypeSecond option')[6].innerHTML = 'JPY';
        document.querySelectorAll('#currencyTypeSecond option')[7].innerHTML = 'CNY';
        document.querySelectorAll('#currencyTypeSecond option')[8].innerHTML = 'INR';
        document.querySelectorAll('#currencyTypeSecond option')[9].innerHTML = 'RUB';
        document.querySelectorAll('#currencyTypeSecond option')[10].innerHTML = 'BGN';
        document.querySelectorAll('#currencyTypeSecond option')[11].innerHTML = 'CZK';
        document.querySelectorAll('#currencyTypeSecond option')[12].innerHTML = 'HUF';
        document.querySelectorAll('#currencyTypeSecond option')[13].innerHTML = 'PLN';

    });

    optionArray.push(firstAbbrevChange);
    optionArray.push(secondAbbrevChange);
    return optionArray;
}

// Change the Abbreviation

reverseButtonElement.addEventListener("click", function() {
    elem1 = reverseFlag()[0].innerHTML;
    elem2 = reverseFlag()[1].innerHTML;
    let reverseArray = [];
    reverseArray.push(elem1);
    reverseArray.push(elem2);
    let mainReverse = reverseArray.reverse();
    reverseFlag()[0].innerHTML = mainReverse[0];
    reverseFlag()[1].innerHTML = mainReverse[1];
});

// Obtain the Flag and the abbreviaton

function showFlag(optionElement, flag, index0, index1, index2) {

    let flagElement = document.querySelector(flag);
    let abbrev;
    let arrayValues = [];

    if (optionElement[index0].selected === true) { 
        flagElement.setAttribute("src", "images/RON.png");
        abbrev = optionElement[index0];
    }
    else if (optionElement[index1].selected === true) {  
        flagElement.setAttribute("src", "images/USD.png");
        abbrev = optionElement[index1];
    }
    else if (optionElement[index2].selected === true) {  
        flagElement.setAttribute("src", "images/EUR.png");
        abbrev = optionElement[index2];
    }
    else if (optionElement[3].selected === true) {  
        flagElement.setAttribute("src", "images/GBP.png");
        abbrev = optionElement[3];
    }
    else if (optionElement[4].selected === true) {  
        flagElement.setAttribute("src", "images/CHF.png");
        abbrev = optionElement[4];
    }
    else if (optionElement[5].selected === true) {  
        flagElement.setAttribute("src", "images/CAD.png");
        abbrev = optionElement[5];
    }
    else if (optionElement[6].selected === true) {  
        flagElement.setAttribute("src", "images/JPY.png");
        abbrev = optionElement[6];
    }
    else if (optionElement[7].selected === true) {  
        flagElement.setAttribute("src", "images/CNY.png");
        abbrev = optionElement[7];
    }
    else if (optionElement[8].selected === true) {  
        flagElement.setAttribute("src", "images/INR.png");
        abbrev = optionElement[8];
    }
    else if (optionElement[9].selected === true) {  
        flagElement.setAttribute("src", "images/RUB.png");
        abbrev = optionElement[9];
    }
    else if (optionElement[10].selected === true) {  
        flagElement.setAttribute("src", "images/BGN.png");
        abbrev = optionElement[10];
    }
    else if (optionElement[11].selected === true) {  
        flagElement.setAttribute("src", "images/CZK.png");
        abbrev = optionElement[11];
    }
    else if (optionElement[12].selected === true) {  
        flagElement.setAttribute("src", "images/HUF.png");
        abbrev = optionElement[12];
    }
    else if (optionElement[13].selected === true) {  
        flagElement.setAttribute("src", "images/PLN.png");
        abbrev = optionElement[13];
    }
    arrayValues.push(flagElement);
    arrayValues.push(abbrev);
    return arrayValues;

}

// RESET VALUES

function resetValues() {
        
        document.querySelectorAll('#currencyTypeFirst option')[0].innerHTML = "RON";
        document.querySelectorAll('#currencyTypeFirst option')[1].innerHTML = 'USD';
        document.querySelectorAll('#currencyTypeFirst option')[2].innerHTML = 'EUR';
        document.querySelectorAll('#currencyTypeFirst option')[3].innerHTML = 'GBP';
        document.querySelectorAll('#currencyTypeFirst option')[4].innerHTML = 'CHF';
        document.querySelectorAll('#currencyTypeFirst option')[5].innerHTML = 'CAD';
        document.querySelectorAll('#currencyTypeFirst option')[6].innerHTML = 'JPY';
        document.querySelectorAll('#currencyTypeFirst option')[7].innerHTML = 'CNY';
        document.querySelectorAll('#currencyTypeFirst option')[8].innerHTML = 'INR';
        document.querySelectorAll('#currencyTypeFirst option')[9].innerHTML = 'RUB';
        document.querySelectorAll('#currencyTypeFirst option')[10].innerHTML = 'BGN';
        document.querySelectorAll('#currencyTypeFirst option')[11].innerHTML = 'CZK';
        document.querySelectorAll('#currencyTypeFirst option')[12].innerHTML = 'HUF';
        document.querySelectorAll('#currencyTypeFirst option')[13].innerHTML = 'PLN';


        document.querySelectorAll('#currencyTypeSecond option')[0].innerHTML = "EUR";
        document.querySelectorAll('#currencyTypeSecond option')[1].innerHTML = 'RON';
        document.querySelectorAll('#currencyTypeSecond option')[2].innerHTML = 'USD';
        document.querySelectorAll('#currencyTypeSecond option')[3].innerHTML = 'GBP';
        document.querySelectorAll('#currencyTypeSecond option')[4].innerHTML = 'CHF';
        document.querySelectorAll('#currencyTypeSecond option')[5].innerHTML = 'CAD';
        document.querySelectorAll('#currencyTypeSecond option')[6].innerHTML = 'JPY';
        document.querySelectorAll('#currencyTypeSecond option')[7].innerHTML = 'CNY';
        document.querySelectorAll('#currencyTypeSecond option')[8].innerHTML = 'INR';
        document.querySelectorAll('#currencyTypeSecond option')[9].innerHTML = 'RUB';
        document.querySelectorAll('#currencyTypeSecond option')[10].innerHTML = 'BGN';
        document.querySelectorAll('#currencyTypeSecond option')[11].innerHTML = 'CZK';
        document.querySelectorAll('#currencyTypeSecond option')[12].innerHTML = 'HUF';
        document.querySelectorAll('#currencyTypeSecond option')[13].innerHTML = 'PLN';

        document.querySelector('.flagFirst').setAttribute("src", "images/RON.png");
        document.querySelector('.flagSecond').setAttribute("src", "images/EUR.png")

}