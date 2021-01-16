let btn = document.getElementById('buttons');

function changeSendBtnText() {
    btn.textContent = 'Send';
}

document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.textContent = 'Sending...';

    let serviceID = 'personal_gmail';
    let templateID = 'middle_east';

    emailjs.send(serviceID, templateID, {
        "from_fullname": this.from_fullname.value,
        "from_useremail": this.from_useremail.value,
        "country_requested": this.country_requested.value,
        "question_asked": this.question_asked.value,

    })
        .then((response) => {
        btn.textContent = 'Sent';
        console.log("Message Sent");
        alert('success');

    }, (error) => {
        btn.textContent = 'Error';
        console.log("Message Did Not Sent", error);
        alert(`failed`);
    });
});
