const form = document.getElementById("infoForm");
const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastName");
const inputAge = document.getElementById("age");
const saveButton = document.getElementById("saveInfo");
const resetButton = document.getElementById("resetInfo");
const infoList = document.getElementById("infoOutput");
const alertMsg = document.getElementById("alertMsg");

let personData = {
  name: "",
  lastName: "",
  age: "",
};

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

function attachEditDeleteListeners(liElement) {
  const editButton = liElement.querySelector("#edit");
  const deleteButton = liElement.querySelector("#delete");

  editButton.addEventListener("click", (e) => {
    const closestLi = e.target.closest("li");
    const existinName = closestLi.getAttribute("data-name");
    const existingLastName = closestLi.getAttribute("data-lastname");
    const existinAge = closestLi.getAttribute("data-age");

    closestLi.innerHTML = `
      <form id="editForm">
        <div id="inputContainer">
          <label for="editName">Enter your name: </label>
          <input type="text" id="editName" value="${existinName}" />
        </div>
        <div id="inputContainer">
          <label for="editLastName">Enter your last name: </label>
          <input type="text" id="editLastName" value="${existingLastName}" />
        </div>
        <div id="inputContainer">
          <label for="editAge">Enter your age: </label>
          <input type="number" id="editAge" value="${existinAge}" />
        </div>
        <div> 
        <button id="saveEdit">Save</button>
        <button id="cancelEdit">Cancel</button>
        </div>
      </form>
    `;

    const editForm = closestLi.querySelector("#editForm");
    const editSave = editForm.querySelector("#saveEdit");
    const cancelEdit = editForm.querySelector("#cancelEdit");

    editSave.addEventListener("click", (e) => {
      e.preventDefault();
      const editName = editForm.querySelector("#editName").value;
      const editLastName = editForm.querySelector("#editLastName").value;
      const editAge = editForm.querySelector("#editAge").value;

      const name =
        editName.trim() !== "" && editName !== existinName
          ? editName
          : existinName;
      const lastName =
        editLastName.trim() !== "" && editLastName !== existingLastName
          ? editLastName
          : existingLastName;
      const age =
        editAge.trim() !== "" && editAge !== existinAge ? editAge : existinAge;

      closestLi.setAttribute("data-name", name);
      closestLi.setAttribute("data-lastname", lastName);
      closestLi.setAttribute("data-age", age);
      closestLi.innerHTML = `
        <p>My name is <strong> ${name} </strong></p>
        <p>My last name is <strong> ${lastName} </strong></p>
        <p>My age is <strong> ${age} </strong></p>
        <div id="buttonContainer">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        </div>
      `;
      attachEditDeleteListeners(closestLi);
    });

    cancelEdit.addEventListener("click", () => {
      closestLi.innerHTML = `
        <p>My name is <strong> ${existinName} </strong></p>
        <p>My last name is <strong> ${existingLastName} </strong></p>
        <p>My age is <strong> ${existinAge} </strong></p>
        <div id="buttonContainer">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        </div>
      `;
      attachEditDeleteListeners(closestLi);
    });
  });

  deleteButton.addEventListener("click", (e) => {
    const closestLi = e.target.closest("li");
    closestLi.remove();
  });
}

saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Update personData with current input values FIRST
  personData.name = inputName.value.trim();
  personData.lastName = inputLastName.value.trim();
  personData.age = inputAge.value.trim();

  // Now validate the updated personData
  if (personData.name && personData.lastName && personData.age) {
    const newLi = document.createElement("li");
    newLi.setAttribute("data-name", personData.name);
    newLi.setAttribute("data-lastname", personData.lastName);
    newLi.setAttribute("data-age", personData.age);
    newLi.innerHTML = `
            <p>My name is <strong> ${personData.name} </strong></p>
            <p>My last name is <strong> ${personData.lastName} </strong></p>
            <p>My age is <strong> ${personData.age} </strong></p>
            <div id="buttonContainer">
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
            </div>
    `;
    infoList.appendChild(newLi);

    // Clear form and reset personData
    inputName.value = "";
    inputLastName.value = "";
    inputAge.value = "";
    alertMsg.innerHTML = ""; // Clear alert message if present

    personData = {
      name: "",
      lastName: "",
      age: "",
    };

    attachEditDeleteListeners(newLi);
  } else {
    alertMsg.innerHTML = `Please enter your name, last name and age!`;
  }
});
