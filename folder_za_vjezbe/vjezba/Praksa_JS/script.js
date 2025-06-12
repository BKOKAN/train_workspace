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
      <button class="minus">−</button>
      <span class="kolicina-item">${proizvod.kolicina}</span>
      <button class="plus">+</button>
    </div>
    <div class="item-group">
      <span class="delete">X</span>
    </div>
  `;

  lista.appendChild(noviListItem);

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

// Stiliziranje kada se checkbox označi/odznači i ikriminiranje i dekriminiranje kolicine
lista.addEventListener("click", (e) => {
  const listItem = e.target.closest("li");
  if (!listItem) return;

  const kolicinaSpan = listItem.querySelector(".kolicina-item");
  const checkbox = listItem.querySelector(".checkbox-kupljeno");
  const label = listItem.querySelector("label");

  // Obrada brisanja
  if (e.target.classList.contains("delete")) {
    listItem.remove();
  }

  // Obrada checkboxa (ručno kliknut)
  else if (e.target.classList.contains("checkbox-kupljeno")) {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      kolicinaSpan.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
      kolicinaSpan.style.textDecoration = "none";
    }
  }

  // Obrada smanjivanja količine
  else if (e.target.classList.contains("minus")) {
    let kolicina = parseInt(kolicinaSpan.textContent);
    if (kolicina > 0) {
      kolicina--;
      kolicinaSpan.textContent = kolicina;
    }

    if (kolicina === 0) {
      checkbox.checked = true;
      label.style.textDecoration = "line-through";
      kolicinaSpan.style.textDecoration = "line-through";
    } else {
      checkbox.checked = false;
      label.style.textDecoration = "none";
      kolicinaSpan.style.textDecoration = "none";
    }
  }

  // Obrada povećavanja količine
  else if (e.target.classList.contains("plus")) {
    let kolicina = parseInt(kolicinaSpan.textContent);
    kolicina++;
    kolicinaSpan.textContent = kolicina;

    if (kolicina > 0) {
      checkbox.checked = false;
      label.style.textDecoration = "none";
      kolicinaSpan.style.textDecoration = "none";
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
