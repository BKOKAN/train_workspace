const modelInput = document.querySelector("#model");
const priceInput = document.querySelector("#price");
const postBtn = document.querySelector("#post");
const resetBtn = document.querySelector("#resetBtn");
const carList = document.querySelector("#carList");
const carForm = document.querySelector("#carForm");

resetBtn.addEventListener("click", (e) => {
  carForm.reset();
});

postBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let carModel = modelInput.value;
  let carPrice = priceInput.value;

  const newListItem = document.createElement("li");
  const modelParagraf = document.createElement("p");
  const priceParagraf = document.createElement("p");
  const carWrapper = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const discountBtn = document.createElement("button");

  newListItem.classList.add("carInfo");
  buttonWrapper.classList.add("carButtonGroup");
  carWrapper.classList.add("carWrapper");
  deleteBtn.classList.add("delete");
  discountBtn.classList.add("discountBtn");

  deleteBtn.innerHTML = "Delete";
  discountBtn.innerHTML = "Discount";
  modelParagraf.innerHTML = `
    ${carModel}
    `;
  priceParagraf.innerHTML = `
    ${carPrice}€
    `;
  carWrapper.appendChild(modelParagraf);
  carWrapper.appendChild(priceParagraf);
  buttonWrapper.appendChild(discountBtn);
  buttonWrapper.appendChild(deleteBtn);
  newListItem.appendChild(carWrapper);
  newListItem.appendChild(buttonWrapper);
  carList.appendChild(newListItem);
  console.log("carForm is", carForm);
  console.log("typeof reset is", typeof carForm.reset);
  carForm.reset();

  const btnDelete = buttonWrapper.querySelector(".delete");
  const btnDiscount = buttonWrapper.querySelector(".discountBtn");
  btnDiscount.addEventListener("click", (e) => {
    const closestLi = e.target.closest("li");
    closestLi.classList.toggle("discount");
    deleteBtn.classList.toggle("discount");
    discountBtn.classList.toggle("discount");
    if (closestLi.classList.contains("discount")) {
      discountBtn.innerHTML = "Full Price";
    } else {
      discountBtn.innerHTML = "Discount";
    }
  });
  btnDelete.addEventListener("click", (e) => {
    const closestLi = e.target.closest("li");
    if (e.target.classList.contains("delete")) {
      closestLi.remove();
    }
  });
});
