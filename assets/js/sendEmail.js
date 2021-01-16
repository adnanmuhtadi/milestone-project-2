function sendMail(contactForm) {
    emailjs.send("personal_gmail", "middle_east", {
        "from_fullname": contactForm.fullname.value,
        "from_useremail": contactForm.useremail.value,
        "country-request": contactForm.country_request.value,
        "question_asked": contactForm.question_asked.value
    })
        .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
