document.addEventListener("DOMContentLoaded", function () {
  const inputInfo = document.getElementById("spremanje");
  const listaPodataka = document.querySelector(".localStorage");
  const spremiBtn = document.getElementById("spremiBtn");

  // Učitavanje postojećih podataka iz localStorage
  function ucitajPodatke() {
    listaPodataka.innerHTML = "";
    // pretvara json string u java script objekt
    const podaci = JSON.parse(localStorage.getItem("podatci")) || [];
    // za svaki podatak unutar lokal storage on radi novi li item sa novim kontentom zavisno sto pise u lokal storage
    podaci.forEach((podatak) => {
      const li = document.createElement("li");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.textContent = "Obriši"; // Dodajemo tekst na gumb

      deleteButton.addEventListener("click", function (event) {
        const LI = event.target.closest("li"); // Pronalazimo <li> koji sadrži gumb
        const podatakZaBrisanje = LI.textContent.replace("Obriši", "").trim(); // Uzimamo tekst iz <li> i uklanjamo tekst gumba

        if (event.target.classList.contains("delete")) {
          // Uklanjamo podatak iz localStorage
          let podaci = JSON.parse(localStorage.getItem("podatci")) || [];
          podaci = podaci.filter((podatak) => podatak !== podatakZaBrisanje); // Filtriramo podatak koji želimo obrisati
          localStorage.setItem("podatci", JSON.stringify(podaci)); // Spremamo ažurirani niz podataka u localStorage

          // Uklanjamo <li> iz DOM-a
          LI.remove();
        }
      });

      li.textContent = podatak;
      li.appendChild(deleteButton); // Dodajemo gumb na kraj <li>
      listaPodataka.appendChild(li);
    });
  }

  // Funkcija za spremanje podataka
  function spremiPodatke() {
    // spremanje u varijablu vrijednost iz input elemnta sto je korinsik upisao i uklanjamo praznine na pocetku i na kraju
    const vrijednost = inputInfo.value.trim();
    if (vrijednost) {
      // Dohvaćamo podatke iz localStorage i pretvaramo ih iz JSON stringa u objekt (niz)
      const podaci = JSON.parse(localStorage.getItem("podatci")) || [];

      // Dodajemo novu vrijednost iz inputa u niz podataka
      podaci.push(vrijednost);

      // Spremamo ažurirani niz podataka u localStorage, pretvarajući ga u JSON string
      localStorage.setItem("podatci", JSON.stringify(podaci));

      // Brišemo unos iz input polja
      inputInfo.value = "";

      // Prikazujemo ažurirane podatke na stranici
      ucitajPodatke();
    }
  }

  // Dodavanje event listenera na gumb "Spremi"
  spremiBtn.addEventListener("click", spremiPodatke);

  // Dodavanje event listenera na tipkovnicu (Enter)
  inputInfo.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Provjerava je li pritisnut Enter
      event.preventDefault(); // Sprječava da se stranica reload-a (ako je to ponašanje na Enter)
      // pozivamo funkciju da napravi nove elemente sa novin podatcima iz lokal storage (Funkcija je napisa prije i samo pozvana unutar event listenera)
      spremiPodatke();
    }
  });

  // Pozivamo funkciju za učitavanje podataka iz localStorage pri pokretanju stranice
  ucitajPodatke();
});
