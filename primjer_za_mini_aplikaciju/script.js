// event listener koji ce uzet podatke iz inputa i prikaziti pomocu novog elemnta nakon klika
// getElementBtId vraca sve element iz htmla koji imaju taj id (getElementByClassName vraca sve element koji imaju tu klasu)

const inputPodatak = document.getElementById("podatak");
const listaPodatka = document.querySelector(".podatci"); // vraca prvi element koji ima taj atribut (u ovom slucaju je elemnt sa klasom podatci)
const submitButton = document.querySelector(".send");
let podatak = "";

inputPodatak.addEventListener("input", function (event) {
  podatak = event.target.value;
});

submitButton.addEventListener("click", function (event) {
  // Stvaramo 3 nova elemnta nakon klika
  const noviLi = document.createElement("li");
  const pEl = document.createElement("p");
  const buttonZaBrisanje = document.createElement("button");

  // unutar novi elementa pisemo odredeni tekst
  pEl.innerHTML = `Podatak od korisnika: ${podatak}`; // odi pisemo backtick literale jer trebamo staviti varijablu unutar teksta
  buttonZaBrisanje.innerHTML = "Obrisi";
  // moramo dodijeliti klasu ili id da bih ga kasnije mogli pronaci u dokumentu i da bih mogli staviti event listener na njega
  buttonZaBrisanje.classList.add("buttonZaBrisanje");

  // nakon sto je tekst postavljen unutar novih elemenata dodajemo ih list itemu koji smo svorili povise
  noviLi.appendChild(pEl);
  noviLi.appendChild(buttonZaBrisanje);

  // nakon sto smo list itemu dodjelili podatke i kontent koji treba imati stavljamo ga unutar ul liste koju smo izvukli na pocetku
  listaPodatka.appendChild(noviLi);

  const deleteButton = document.querySelector(".buttonZaBrisanje");

  deleteButton.addEventListener("click", function (event) {
    // u varijablu noviLi stavljamo najblizi list item element od element gdje smo kliknuli
    const listEl = event.target.closest("li");
    // ako element na koji smo kliknuli sadrzi klasu sa imenom buttonZaBrisanje onda noviLi se brise tocnije list item elemnt koji je spremljen unutar varijable se brise
    if (event.target.classList.contains("buttonZaBrisanje")) {
      listEl.remove();
    }
  });
});
