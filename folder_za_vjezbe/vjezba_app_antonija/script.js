const inputInformacija = document.querySelector("#info");
const buttonSubmitInfo = document.querySelector(".submitInfo");
const listaInformacija = document.querySelector(".ListaInformacija");
const form = document.querySelector(".inputContainer");
let informacija = "";

// let informacija = document.querySelector("#info").value; --> dohvaca element i automatski sprema vrijednost koju je korisnik u varijablu

inputInformacija.addEventListener("input", function (event) {
  informacija = event.target.value;
});

// inputInformacija.addEventListener("input", function () {
//   informacija = inputInformacija.value; --> pozivamo varijablu u koju smo spremili element iz htmla i pozivamo value na nju da bih dohvatili vrijednost koju je korinsik upisao
// }); ---> drugi nacin event listenera

buttonSubmitInfo.addEventListener("click", function (event) {
  event.preventDefault();

  const newListItem = document.createElement("li");
  const buttonZaBrisanje = document.createElement("button");
  buttonZaBrisanje.classList.add("delete");

  newListItem.innerHTML = `Ovo je tekst od korisnika ${informacija}`;
  buttonZaBrisanje.innerHTML = "Obrisi";

  newListItem.appendChild(buttonZaBrisanje);
  listaInformacija.appendChild(newListItem);

  buttonZaBrisanje.addEventListener("click", function (event) {
    const listItem = event.target.closest("li");
    if (event.target.classList.contains("delete")) {
      listItem.remove();
    }
  });

  form.reset();
  informacija = "";
});
