const contentEl = document.querySelector(".content");
const activityFinder = document.querySelector(".getActivity");

let content = ``;
let searchInput = "";

activityFinder.addEventListener("click", (e) => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      return response.json();
    })
    .then((data) => {
      contentEl.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.log(error);
      contentEl.textContent = "Something went wrong";
    });
});
