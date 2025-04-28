document.addEventListener("DOMContentLoaded", function () {
  const ul = document.querySelector(".apartmani");

  // primjer spremanja url za udaljeni data servis na kojem su spremljeni podatci
  const apiUrl = "https://example.com/api/apartments";

  // dohvacanje podataka
  fetch(apiUrl)
    // kada dohvati podatke provjerava da li je odgovor dobar ako nije onda vraca error u obliku poruke
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    // ako je podatci stignu bez ikakvih problema onda za svaki podatak vraca ime apartmana sa cijenom
    .then((data) => {
      // petlja kao funkcija (.forEach) koja za svaki apartman pravi list item i unutar njega (textContent) stavlja njegovo ime i cijenu
      data.forEach((apartment) => {
        const li = document.createElement("li");
        li.textContent = `Apartment: ${apartment.name} - ${apartment.price} EUR`;
        ul.appendChild(li);
      });
    })
    // ako ima greska sa api servison (bila ona krivi link ili nema podataka na api servisu)
    .catch((error) => {
      console.error("Error fetching apartments:", error);
    });
});
