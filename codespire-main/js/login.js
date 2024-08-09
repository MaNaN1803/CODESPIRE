
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function sendEmail() {

  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "Password",
    To: "email@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone No. : " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
  }).then((message) => alert("Message Sent Successfully"));
}

      // listen to the form submission
      document
        .getElementById("my_form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const serviceID = "service_g0q2f7x";
          const templateID = "template_jy70y3i";

          // send the email here
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            }
          );
        });


function sendMail(params) {
  alert("Your form has been submitted successfully!");
  var tempParams = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

emailjs.send('service_tl22yng','template_qjr3m7s', tempParams)
    .then(function (res) {
      console.log("sucess", res.status);
    })
  }
