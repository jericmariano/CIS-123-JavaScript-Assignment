let formContact = document.getElementById("formData")


function sendForm(event) {
    event.preventDefault();
    let formName = document.getElementById("userName").value
    let formEmail = document.getElementById("userEmail").value
    let formMessage = document.getElementById("userMessage").value
    window.alert("Thank you " + formName + " (at " + formEmail + "). We got your message: " + formMessage)
}

formContact.addEventListener("submit", function(event){sendForm(event)})