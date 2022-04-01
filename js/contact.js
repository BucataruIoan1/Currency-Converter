let messageBtnElement = $(".messageBtn")[0];
let contactNameElement = $('#contactName')[0];
let contactEmailElement = $('#contactEmail')[0];
let contactMessageElement = $('#contactMessage')[0];

let nameContainerElement = $('.nameContainer')[0];
let emailContainerElement = $('.emailContainer')[0];

messageBtnElement.addEventListener("click", function() {

    // REGEX for Name
    let name = contactNameElement.value;
    let regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    // REGEX for Email
    let email = contactEmailElement.value;
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // The Name and Email is incorrect
    if (!name.match(regexName) && !email.match(regexEmail)) {

        let spanNameElement = document.createElement('span'); // Create a span element for name
        spanNameElement.innerHTML = 'Please introduce your full name';
        spanNameElement.classList.add("redText");
        
        let spanEmailElement = document.createElement('span'); // Create a span element for email
        spanEmailElement.innerHTML = 'Please introduce a valid address';
        spanEmailElement.classList.add("redText");
        nameContainerElement.appendChild(spanNameElement);
        emailContainerElement.appendChild(spanEmailElement);

        messageBtnElement.addEventListener("click", function() {
            spanNameElement.remove();
            spanEmailElement.remove();
        });
    }
    // The Name is incorrect
    else if (!name.match(regexName) && email.match(regexEmail)) {

        let spanNameElement = document.createElement('span'); // Create a span element for name
        spanNameElement.innerHTML = 'Please introduce your full name';
        spanNameElement.classList.add("redText");
        nameContainerElement.appendChild(spanNameElement);

        messageBtnElement.addEventListener("click", function() {
            spanNameElement.remove();
        });
    }
    // The Email is incorrect
    else if (name.match(regexName) && !email.match(regexEmail)) {

        let spanEmailElement = document.createElement('span'); // Create a span element for email
        spanEmailElement.innerHTML = 'Please introduce a valid address';
        spanEmailElement.classList.add("redText");
        emailContainerElement.appendChild(spanEmailElement);

        messageBtnElement.addEventListener("click", function() {
            spanEmailElement.remove();
        });
    }
    // The Name and Email is correct
    else {
        contactNameElement.value = '';
        contactEmailElement.value = '';
        contactMessageElement.value = '';
        
    }
})








