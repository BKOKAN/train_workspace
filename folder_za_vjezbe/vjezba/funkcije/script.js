function sortiranjeBrojeva(niz) {
  return niz.sort(function (a, b) {
    return a - b;
  });
}

const brojevi = [3, 7, 12, 11, 2, 1, 52];

console.log(sortiranjeBrojeva(brojevi));

// event listener kada se dokument ucita
document.addEventListener("DOMContentLoaded", function () {
  // Dohvatanje elemenata
  const input = document.getElementById("racunica");
  const dugme = document.querySelector(".izracunaj");
  const prikaz = document.getElementById("rezultat");

  // Dodavanje event listenera na dugme
  dugme.addEventListener("click", function () {
    const izraz = input.value;

    // pokusaj pretvoriti varijablu izraz u direktnu operaciju
    try {
      const rezultat = eval(izraz);
      // ako uspije onda ispisi rezultat unutar paragrafa
      prikaz.textContent = `Rezultat: ${rezultat}`;
    } catch (error) {
      prikaz.textContent = "Greška u izrazu!";
    }
  });
});
