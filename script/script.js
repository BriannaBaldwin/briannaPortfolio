'use strict';
/*
    Author: Brianna Baldwin
    Date Created: 04/05/2022
    Date Last Modified: 04/07/2022
    Modified by: Brianna Balwin
    Modification Log:
        04/05/2022 - Created file
        04/07/2022 - Removed custom smooth scrolling effect | edited Chart
        04/21/2022 - Added form validation
*/

/* Animate on Scroll */
AOS.init();

/* Chart.js */
Chart.defaults.global.defaultFontFamily = "Open Sans";
const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
type: 'doughnut',
data: {
    labels: ["HTML/CSS", "JavaScript", "C#", "PHP/mySQL", "Unity", "Python"],
    datasets: [{
        data: [25, 12, 25, 18, 18, 2],
        backgroundColor: [
                '#ffadad',
                '#ffd6a5',
                '#fdffb6',
                '#caffbf',
                '#9bf6ff',
                '#bdb2ff'
        ],
        borderColor: 'rgba(23, 23, 23, .5)',
    }]
},
    options: {
        responsive: true,
        legend: {
            position: 'left',
            labels: {
                fontSize: window.innerWidth > 1136 ? 25 : 15,
                fontColor: 'black',
                fontStyle: '500'
            }
        },
        title: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});


/* Form Validation */
function validateForm() {
  let contactEntered = "Thank you for the message! \n\n*Form submission is disabled to prevent spam, but validation is still functioning.";
  let failAlert = "";
  let isValid = true;

  let nameInput = document.forms["contact-form"]["name"].value;
  if (nameInput == "") {
    failAlert += "Name must be filled out\n"
    isValid = false;
  }

  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  let emailInput = document.forms["contact-form"]["email"].value;
  if (emailInput == "") {
    failAlert += "Email must be filled out\n"
    isValid = false;
  } else if ( !emailPattern.test(emailInput) ){
    failAlert += "Must be a valid email\n"
    isValid = false;
  }

  let commentsInput = document.forms["contact-form"]["comment"].value;
  if (commentsInput == "") {
    failAlert += "Please enter a comment\n"
    isValid = false;
  }

    if (isValid == false) {
          alert(failAlert);
          return false;
  } else {
          alert(contactEntered);
      }
}