function submitEmail(event) {
    event.preventDefault();

    let senderEmail = document.getElementById("senderEmail").value;
    let from = document.getElementById("from").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let result = document.getElementById("result");

    // Clear previous result text and style before processing new submission
    result.textContent = "";
    result.style.color = "";

    if (senderEmail !== "" && from !== "" && content !== "") {
        if (!validateEmail(senderEmail)) {
            result.style.color = "red";
            result.textContent = "Invalid email.";
            return;
        }
        if (title.length > 200) {
            result.style.color = "red";
            result.textContent = "Title must be shorter than 200 characters.";
            return;
        }   
        result.style.color = "green";
        result.textContent = "Email sent successfully";
        document.getElementById("senderEmail").value = "";
        document.getElementById("from").value = "";
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        return;
    } else {
        result.style.color = "red";
        result.textContent = "Please fill in all required fields.";
    }

    document.getElementById("email-form").reset();
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


