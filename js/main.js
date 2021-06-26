// DECLARING VARIABLES 
// Declare variables that will
// store references for 

// <input type="button" id="submit-button">,
let sb = document.getElementById('submit-button');


// <input type="text" id="fullname">,

let fn = document.getElementById('fullname');

// <input type="text" id="email">

let em = document.getElementById('email');

// <textarea id="message"></textarea>

let msg = document.getElementById('message');

// Declare variable that will
// store regular expression for email

// let email = "";

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function formValidation(ev) {

    ev.preventDefault();

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors

    let data = {};
    let errors = [];


    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if fullname is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".

    if (fn.value !== '') {
        data.name = fn.value;
    }

    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your conditional here.
    else {
        errors.push('Please enter your full name!');
    }
    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".

    if (em.value !== '') {
        data.email = em.value;
    }
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your nested conditional here.
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your outer conditional here.
    else {
        errors.push('Please enter your email!');
    }
    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".

    if (msg.value !== '') {
        data.message = msg.value;
    }

    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your conditional here.
    else {
        errors.push('Please enter your message!');
    }

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    // If so: 
    // Print it in JavaScript console.
    // Otherwise:
    // Print the data in JavaScript console.
    // Clear text-fields
    // End your conditional here.

    if (errors == '') {
        console.log("COLLECTED DATA:", data);
        document.forms['contact'].reset();
    } else {
        console.log("ERRORS:", errors);
    }

    // Close your function here

}

    // Register your form to "click" event.


sb.addEventListener('click', formValidation);
