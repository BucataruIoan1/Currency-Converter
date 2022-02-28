let inputElement = document.querySelector('#amountValue');
let resultFirstElement = document.querySelector('.resultExchange p');

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

function checkNumberInput() {

    let checkNumber = Number(inputElement.value);

    if(isNaN(checkNumber) !== true && checkNumber > 0) {

        if (document.querySelector(".ron").selected === true) {
        resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".ron").innerHTML;
        }
        else if (document.querySelector(".dollar").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".dollar").innerHTML;
        }
        else if (document.querySelector(".euro").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".euro").innerHTML;
        }
        else if (document.querySelector(".pound").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".pound").innerHTML;
        }
        else if (document.querySelector(".franc").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".franc").innerHTML;
        }
        else if (document.querySelector(".canadian").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".canadian").innerHTML;
        }
        else if (document.querySelector(".yen").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".yen").innerHTML;
        }
        else if (document.querySelector(".yuan").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".yuan").innerHTML;
        }
        else if (document.querySelector(".rupee").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".rupee").innerHTML;
        }
        else if (document.querySelector(".rouble").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".rouble").innerHTML;
        }
        else if (document.querySelector(".lev").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".lev").innerHTML;
        }
        else if (document.querySelector(".koruna").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".koruna").innerHTML;
        }
        else if (document.querySelector(".forint").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".forint").innerHTML;
        }
        else if (document.querySelector(".zloty").selected === true) {
            resultFirstElement.innerHTML = inputElement.value + ' ' + document.querySelector(".zloty").innerHTML;
        }

    } else {
        inputElement.value = '';
        resultFirstElement.innerHTML = '';
    }

    inputElement.value = '';
    
}


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
