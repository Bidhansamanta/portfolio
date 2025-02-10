// Select input fields and the submit button
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit");

// Add event listener to the button
submitButton.addEventListener("click", function () {
  // Get input values
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Check if all fields are filled
  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Log the input values
  console.log("Name:", nameValue);
  console.log("Email:", emailValue);
  console.log("Message:", messageValue);

  // Display alert with input values
  alert(`Submitted Data:\nName: ${nameValue}\nEmail: ${emailValue}\nMessage: ${messageValue}`);

  // Optionally, clear the input fields after submission
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
