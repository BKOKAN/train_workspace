// Get references
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, select");

// Prepare DOB selects (year, month, day)
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Populate day, month, year options (same as before)
for (let i = 1; i <= 31; i++) {
  daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
months.forEach((month, index) => {
  monthSelect.innerHTML += `<option value="${index + 1}">${month}</option>`;
});

const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
  yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Update days based on month and year selected
function updateDays() {
  const year = parseInt(yearSelect.value);
  const month = parseInt(monthSelect.value);

  if (!year || !month) return;

  const daysInMonth = new Date(year, month, 0).getDate();

  daySelect.innerHTML = "";
  for (let i = 1; i <= daysInMonth; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

monthSelect.addEventListener("change", updateDays);
yearSelect.addEventListener("change", updateDays);
updateDays();

// Object to store form data dynamically
const formData = {};

// Listen to any input or select changes inside form and update formData
form.addEventListener("input", (e) => {
  const target = e.target;
  formData[target.id] = target.value;
});

// Handle form submit (button click)
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = formData.username;
  const email = formData.email;

  const yearNum = Number(yearSelect.value);
  const monthNum = Number(monthSelect.value);
  const dayNum = Number(daySelect.value);

  if (!username) {
    alert("Please enter a username.");
    return;
  }
  if (!email) {
    alert("Please enter an email.");
    return;
  }
  if (!yearNum || !monthNum || !dayNum) {
    alert("Please select your complete date of birth.");
    return;
  }

  const baseUrl =
    "https://posttraining-86384-default-rtdb.europe-west1.firebasedatabase.app/users";

  try {
    // Check if username exists
    const usernameRes = await fetch(
      `${baseUrl}/${encodeURIComponent(username)}.json`
    );
    const usernameData = await usernameRes.json();

    if (usernameData !== null) {
      alert("Username already exists. Please choose another.");
      return;
    }

    // Check if email exists (scan all users)
    const allUsersRes = await fetch(`${baseUrl}.json`);
    const allUsersData = await allUsersRes.json();

    // allUsersData is an object with usernames as keys
    const emailExists =
      allUsersData &&
      Object.values(allUsersData).some((user) => user.email === email);

    if (emailExists) {
      alert("Email already in use. Please use another email.");
      return;
    }

    // If both username and email are free, proceed with saving user

    const dob = `${yearNum}-${String(monthNum).padStart(2, "0")}-${String(
      dayNum
    ).padStart(2, "0")}`;

    const userData = {
      name: formData.name || "",
      lastName: formData.lastName || "",
      email: email,
      dateOfBirth: dob,
    };

    const saveRes = await fetch(
      `${baseUrl}/${encodeURIComponent(username)}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    if (!saveRes.ok) throw new Error("Failed to save user");

    alert("User created successfully!");
    form.reset();
    updateDays();
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
});
