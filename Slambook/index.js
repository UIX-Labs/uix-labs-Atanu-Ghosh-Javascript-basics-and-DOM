document.addEventListener("DOMContentLoaded", function () {
  // Select the form element using the ID
  var form = document.getElementById("myForm");

  // Add a submit event listener
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Log the message to the console
    console.log("I am inside submit");

    // Select input elements using ids
    var contactName = document.getElementById("contactName").value;
    var relationship = document.getElementById("relationship").value;
    // Add more variables for other input fields as needed

    // Log the selected values to the console
    console.log("Contact Name:", contactName);
    console.log("Relationship:", relationship);
    // Log values for other input fields as needed
  });
});
