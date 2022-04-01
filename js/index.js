// Get Current Date

const monthsOfYear = ["January", "February", "March", "April", "May", "Friday", "June", "July", "August", "September", "October", "November", "December"];
let date = document.querySelector('.titleDesc h3');
date.innerHTML = `${new Date().getDate()} ${monthsOfYear[(new Date().getMonth())]} ${new Date().getFullYear()}`;

let apiKey = "d0648519dc95b94dd9838ce0";
let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/RON`;
fetch(url).then(response => response.json()).then(result => {
    
// Get Current Value of Currency

let valueLength = document.querySelectorAll(".value").length;

for (let i = 0; i < valueLength; i++) {

    let value = document.querySelectorAll(".value")[i].innerHTML;
    document.querySelectorAll(".value")[i].innerHTML = result.conversion_rates[value];
}
});