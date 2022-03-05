let messageBtnElement = document.querySelector(".messageBtn");
let contactNameElement = document.querySelector('#contactName');
let contactEmailElement = document.querySelector('#contactEmail');
let contactMessageElement = document.querySelector('#contactMessage');

let nameContainerElement = document.querySelector('.nameContainer');
let emailContainerElement = document.querySelector('.emailContainer');

messageBtnElement.addEventListener("click", function() {

    // REGEX for Name
    let name = contactNameElement.value;
    let regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    // REGEX for Email
    let email = contactEmailElement.value;
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!name.match(regexName) && !email.match(regexEmail)) {

        let spanNameElement = document.createElement('span');
        spanNameElement.innerHTML = 'Please introduce your full name';
        let spanEmailElement = document.createElement('span');
        spanEmailElement.innerHTML = 'Please introduce your email address';
        nameContainerElement.appendChild(spanNameElement);
        emailContainerElement.appendChild(spanEmailElement);

        messageBtnElement.addEventListener("click", function() {
            spanNameElement.remove();
            spanEmailElement.remove();
        });
    }
    else if (!name.match(regexName) && email.match(regexEmail)) {

        let spanNameElement = document.createElement('span');
        spanNameElement.innerHTML = 'Please introduce your name';
        nameContainerElement.appendChild(spanNameElement);
        messageBtnElement.addEventListener("click", function() {
            spanNameElement.remove();
        });
    }
    else if (name.match(regexName) && !email.match(regexEmail)) {

        let spanEmailElement = document.createElement('span');
        spanEmailElement.innerHTML = 'Please introduce your email address';
        emailContainerElement.appendChild(spanEmailElement);
        messageBtnElement.addEventListener("click", function() {
            spanEmailElement.remove();
        });
    }
    else {
        contactNameElement.value = '';
        contactEmailElement.value = '';
        contactMessageElement.value = '';
        
    }
})

