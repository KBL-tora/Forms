    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

       // Wait until the entire page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
 
  var form = document.getElementById('myForm');
  
  var input = document.getElementById('inputField');
  
  // Create a regular expression that matches only alphanumeric characters (letters and numbers)
  var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  
  // Add an event listener to the form that runs when the form is submitted
  form.addEventListener('submit', function(event) {
    // Test the input value against the regular expression
    if (!alphanumericRegex.test(input.value)) {
      // If the test fails (input is not alphanumeric), stop the form from submitting
      event.preventDefault();
      // Alert the user to enter a valid alphanumeric value
      alert('Please enter a valid alphanumeric value.');
    } else {
      // If the input is valid, notify the user 
      alert('Form submitted successfully!');
    }
  });
})