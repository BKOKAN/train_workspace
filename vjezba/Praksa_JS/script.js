// Objekt za privremeno čuvanje unosa iz forme
const proizvod = {
  naziv: "",
  kolicina: "",
  checkbox: false,
};

// Elementi iz DOM-a
const itemInput = document.getElementById("item");
const amountInput = document.getElementById("amount");
const form = document.querySelector("form");
const lista = document.querySelector(".shopping-lista");
const btnUkloniKupljeno = document.querySelector(".ukloni-kupljeno");

// Unos naziva proizvoda
itemInput.addEventListener("input", (e) => {
  proizvod.naziv = e.target.value;
});

// Unos količine
amountInput.addEventListener("input", (e) => {
  proizvod.kolicina = e.target.value;
});

// Dodavanje proizvoda
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const noviListItem = document.createElement("li");
  noviListItem.classList.add("flex-container");
  noviListItem.innerHTML = `
    <div class="item-group">
      <label>
        <input type="checkbox" class="checkbox-kupljeno" />
        ${proizvod.naziv}
      </label>
    </div>
    <div class="item-group">
      <span class="kolicina-item">Količina: ${proizvod.kolicina}</span>
    </div>
    <div class="item-group">
      <span class="delete">X</span>
    </div>
  `;

  lista.appendChild(noviListItem);

  // Resetiraj formu i objekt
  form.reset();
  proizvod.naziv = "";
  proizvod.kolicina = "";
  proizvod.checkbox = false;
});

// Brisanje pojedinačnog proizvoda (X)
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.closest("li");
    if (li) {
      li.remove();
    }
  }
});

// Stiliziranje kada se checkbox označi/odznači
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox-kupljeno")) {
    const checkbox = e.target;
    const label = checkbox.closest("label");
    const listItem = checkbox.closest("li");
    const kolicina = listItem.querySelector(".kolicina-item");

    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      kolicina.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
      kolicina.style.textDecoration = "none";
    }
  }
});

// Uklanjanje svih označenih proizvoda
btnUkloniKupljeno.addEventListener("click", () => {
  if (confirm("Jesi li siguran da želiš ukloniti sve kupljene proizvode?")) {
    const sviProizvodi = lista.querySelectorAll("li");

    sviProizvodi.forEach((li) => {
      const checkbox = li.querySelector(".checkbox-kupljeno");
      if (checkbox && checkbox.checked) {
        li.remove();
      }
    });
  }
});
