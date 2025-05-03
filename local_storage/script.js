// Get references to the main buttons and container
const buttonCreateInfoForm = document.querySelector(".createInfo"); // Button to create the input form
const buttonLoadInfo = document.querySelector(".loadInfo"); // Button to load existing users
const containerElement = document.querySelector(".containerElement"); // Where the form or data is shown

// When the page is fully loaded, attach event listeners
document.addEventListener("DOMContentLoaded", onLoad);

// Function to handle the submit event of the form
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get values from input fields
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  // Check if all required fields are filled
  if (username && name && surname && age > 0 && email) {
    // Create a new user object
    let newUser = {
      username,
      name,
      surname,
      age,
      email,
    };

    // Get existing users from localStorage or start with an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate username
    const usernameExists = users.some((user) => user.username === username);
    if (usernameExists) {
      alert("Username already exists. Please enter a new one.");
      return;
    }

    // Add the new user and save it back to localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Information saved successfully!");

    // Remove the form after saving
    event.target.closest("form").remove();
  } else {
    alert("Please enter all information!");
  }
}

// Function to create and show the input form
function createInfoOnClick(event) {
  const createForm = document.createElement("form"); // Create form element
  createForm.classList.add("submitInfo"); // Add class for styling if needed

  // Add input fields to the form using innerHTML
  createForm.innerHTML = `
    <div class="infoContainer">
      <label for="username">Enter your username: </label>
      <input type="text" id="username" placeholder="Enter your username">
    </div>
    <div class="infoContainer">
      <label for="name">Enter your name: </label>
      <input type="text" id="name" placeholder="Enter your name">
    </div>
    <div class="infoContainer">
      <label for="surname">Enter your surname: </label>
      <input type="text" id="surname" placeholder="Enter your surname">
    </div>
    <div class="infoContainer">
      <label for="age">Enter your age: </label>
      <input type="number" id="age" placeholder="Enter your age">
    </div>
    <div class="infoContainer">
      <label for="email">Enter your email: </label>
      <input type="text" id="email" placeholder="ex. example@hotmail.com">
    </div>
    <button class="submit">Save info</button>
  `;

  // Add the form to the container
  containerElement.appendChild(createForm);

  // Attach the submit handler to the form
  createForm.addEventListener("submit", handleSubmit);
}

// Function to display users from localStorage
function loadLocalData() {
  containerElement.innerHTML = ""; // Clear previous content
  const dataContainer = document.createElement("ul"); // Create a list container

  // Get all users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Loop through users and create a list item for each
  users.forEach((user) => {
    const dataList = document.createElement("li");
    dataList.classList.add("data");
    dataList.innerHTML = `
      <p>Your username is: ${user.username}</p>
      <p>Your name is: ${user.name}</p>
      <p>Your surname is: ${user.surname}</p>
      <p>Your age is: ${user.age}</p>
      <p>Your email is: ${user.email}</p>
      <div class="editButtons">
        <button class="edit">Edit Info</button>
        <button class="deleteExistingData">Delete Info</button>
      </div>
    `;

    // Append list item to the container
    dataContainer.appendChild(dataList);

    // Attach edit functionality
    const editButton = dataList.querySelector(".edit");
    editButton.addEventListener("click", (event) =>
      handleEdit(event, user.username)
    );

    // Attach delete functionality
    const deleteButton = dataList.querySelector(".deleteExistingData");
    deleteButton.addEventListener("click", () => handleDelete(user.username));
  });

  // Append the full list to the container
  containerElement.appendChild(dataContainer);
}

// Function to handle editing an existing user's data
function handleEdit(event, username) {
  const currentLi = event.target.closest("li"); // Get the current list item
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.username === username); // Find the user by username

  // Replace the list item content with editable form fields
  currentLi.innerHTML = `
    <form class="editForm">
      <div class="editDiv"><label>Username:</label><input id="username" value="${user.username}"></div>
      <div class="editDiv"><label>Name:</label><input id="name" value="${user.name}"></div>
      <div class="editDiv"><label>Surname:</label><input id="surname" value="${user.surname}"></div>
      <div class="editDiv"><label>Age:</label><input id="age" type="number" value="${user.age}"></div>
      <div class="editDiv"><label>Email:</label><input id="email" value="${user.email}"></div>
      <button type="submit" class="saveEdit">Save Changes</button>
    </form>
  `;

  // Add event listener to save the updated data
  const form = currentLi.querySelector(".editForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form action

    // Get updated values from form
    const updatedData = {
      username: form.querySelector("#username").value, // Allow username to be updated
      name: form.querySelector("#name").value,
      surname: form.querySelector("#surname").value,
      age: form.querySelector("#age").value,
      email: form.querySelector("#email").value,
    };

    // Replace the old user with the updated user
    const updatedUsers = users.map(
      (user) => (user.username === username ? updatedData : user) // Match by original username
    );

    // Save updated data to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Refresh the display
    loadLocalData();
  });
}

// Function to handle deleting a user
function handleDelete(username) {
  // Confirm deletion
  const confirmDelete = confirm(
    `Are you sure you want to delete user "${username}"?`
  );
  if (!confirmDelete) return;

  // Get current users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Filter out the user to be deleted
  const filteredUsers = users.filter((u) => u.username !== username);

  // Save updated users list
  localStorage.setItem("users", JSON.stringify(filteredUsers));

  // Refresh the display
  loadLocalData();
}

// Initial function when page loads
function onLoad() {
  // Attach click handlers
  buttonCreateInfoForm.addEventListener("click", createInfoOnClick);
  buttonLoadInfo.addEventListener("click", loadLocalData);
}
