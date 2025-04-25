// Object to store messages
let messages = {
  user: {
    name: "",
    message: "",
  },
};

// Elements to get for the project
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const welcomeMessage = document.getElementById("welcome");
const chatBox = document.getElementById("chat-box");
const inputMessage = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
const formMessage = document.getElementById("message-form");

// Set the username when user1 or user2 is clicked
user1.addEventListener("click", () => {
  messages.user.name = "User 1";
  welcomeMessage.textContent = `Welcome, ${messages.user.name}!`;
});

user2.addEventListener("click", () => {
  messages.user.name = "User 2";
  welcomeMessage.textContent = `Welcome, ${messages.user.name}!`;
});

formMessage.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the message from the input field
  const messageText = inputMessage.value.trim();

  // If no user is selected, alert the user to choose a user
  if (!messages.user.name) {
    alert("Please select a user first.");
    return;
  }

  // If the message is not empty, add it to the chat box
  if (messageText) {
    // Create a new message item
    const messageItem = document.createElement("div");
    messageItem.classList.add("message");

    // Set the message content
    messageItem.innerHTML = `<strong>${messages.user.name}:</strong> ${messageText}`;

    // Append the message to the chat box
    chatBox.appendChild(messageItem);

    // Clear the message input field
    inputMessage.value = "";
  }
});
