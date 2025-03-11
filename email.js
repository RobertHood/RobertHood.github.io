function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function submitEmail(){
    let senderEmail = document.getElementById("senderEmail").value;
    let from = document.getElementById("from").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content");
    let result = document.getElementById("result");

    if (senderEmail !== null && from !== null && content !== null){
        if (!validateEmail(senderEmail)){
            result.style.color= "red";
            result.textContent = "Invalid email.";
            return;
        }
        else if (String(title) > 200){
            result.style = "red";
            result.textContent = "Title must be shorter than 200 words.";
            return;
        }
        result.style = "green";
        result.textContent = "Email sent successfully";
        return;
    }
    document.getElementById("emailForm").reset();
}