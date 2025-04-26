// Varijable koje se mogu koristit u cijelom dokumumentu
let ime = "";
let prezime = "";

// Izvlacenje elemnata iz DOM-a
const inputIme = document.getElementById("inputIme");
const inputPrezime = document.getElementById("inputPrezime");
const main = document.getElementsByClassName("main");
const forma = document.getElementById("forma");
const buttonSubmit = document.getElementById("buttonSubmit");
const prikaziPozdrav = document.querySelector(".prikaziPozdrav"); // promjenjeno sa .getElementByClassName u .querySelector jer .getElementByClassName treba da ima (ime classe)[indexon], a .querySelector vraca odmah prvi element mi imamo samo 1 element sa ovon classom

// Event listeneri

// izvlacenje imena koji je korisnik upisao
inputIme.addEventListener("input", function (event) {
  ime = event.target.value;
  //   console.log(ime); ---> provjera da li kod sprema sto je korisnik upisao u varijablu let ime= "";
});

// izvlacenje prezimena koji je korisnik upisao
inputPrezime.addEventListener("input", function (event) {
  prezime = event.target.value;
  //   console.log(prezime); ---> provjera da li kod sprema sto je korisnik upisao u varijablu let prezime= "";
});

/// prati da li se kliknulo na button element ako je radi se funckija dole
buttonSubmit.addEventListener("click", function pozdraviKorisnika(event) {
  event.preventDefault(); // --- da se ne refrasha stranica nakon clicka na button send koji ima akciju submit

  // stvara novi paragraf element u indexu automatski nakon submita tocnije nakon klika na button koji je izvucen iz doma
  const pozdrav = document.createElement("p");
  // stvaramo element koji ce simulirati tipku za brisanje
  const brisanjeElementa = document.createElement("button");
  // stvaramo div da mozemo obrisati cijeli element sa paragrafom i buttnom
  const divZaBrisanjePozdrava = document.createElement("div");

  // ${ime} i ${prezime} su varijable i koristimo ih unutar teksta kao poruku korisniku i moraju biti unutar backtick literala ``
  //  ${ime} i ${prezime} vrijednost vucemo iz linije 16 i 22 kada korisnik upise svoje ime i prezime
  pozdrav.innerHTML = `Pozdrav ${ime} ${prezime}!`;
  brisanjeElementa.innerHTML = "X";
  //   console.log(pozdrav); ---> provjera da li ispisuje <p> `Pozdrav ${ime} ${prezime}!` <p>

  // kada se klikne na submit stvara novi div element unutar drugog diva koji ima class name prikaziPozdrav
  prikaziPozdrav.appendChild(divZaBrisanjePozdrava);

  // nakon sto stvori novi div element onda unutar tog div elementa ce staviti novi paragraf element i button element
  divZaBrisanjePozdrava.appendChild(pozdrav);
  divZaBrisanjePozdrava.appendChild(brisanjeElementa);

  // nakon submita resetiraj polja za input imena i prezimena
  forma.reset();

  // event listener koji ce obisati div element koji smo stovrili pomocu java scripta. Koji ima paragraf i button unutar sebe. Kada obrisemo taj div, brisemo sve sto je sa njim. Znaci i paragraf i button element unutar div elementa
  brisanjeElementa.addEventListener("click", function (event) {
    divZaBrisanjePozdrava.remove();
  });
});

// niz sa imenima
const imena = ["ivan", "josip", "ana", "petra", "antonija", "pero"];

// definicija funckije koja prima 2 broja kao argumente (a i b) i provjerava uvjete da li je prvi argument (a) veci ili jednak drugom argumentu (b) ako je vraca prvi argument (a), ako nije uvjet ispunjen provjerava drugi uvjet dali je drugi argument (b) veci od prvog (a) ako je onda vraca drugi argument (b)
function veciBroj(a, b) {
  if (a >= b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

// pozivanje funkcije sa 2 braja, funckija je definirana povise
veciBroj(3, 2);

// definicija funckije koja prima niz ili array kao argument
// for petlja ide od 0 sve do duzine niza ili arraya (niz.length) i u petlji provjeravamo da li je trenutna najduza rijec manja ili veca od rijeci koja izvucena iz niza
// rijec iz niza  izvlacimo pomocu varijeble "i" koja je definirana na pocetku kao 0 i kada prode kroz rijec i se uvijek uveca za 1 (i++) i pomocu tog broja izvlaci rijec iz niza pomocu trenutnog broja u petlji (npr i=0 onda petlja provjerava niz[0] i to je prva rijec u nizu)
function najduzaRijec(niz) {
  let najduzaTrenutnaRijec = "";

  for (i = 0; i < niz.length; i++) {
    if (najduzaTrenutnaRijec.length < niz[i].length) {
      //ako je najduzaTrenutnaRijec manja od rijeci koju smo izvukli iz niza onda tu rijec iz niza odmah spremamo kao najduzu rijec
      najduzaTrenutnaRijec = niz[i];
    }
  }
  // ispisujemo u konzoli koja je najduza rijec iz niza
  console.log(najduzaTrenutnaRijec);
}

// pozivamo funkciju sa argumentom imena koji je niz i koji smo vec prije definirali povise i trazi najduzu rijec pomocu for petlje koju smo definirali povise
najduzaRijec(imena);

// definicija funkcije koja provjera da li je broj paran ili ne paran. Broj stavljamo kao argument da se upise.
function provjeraParnogBroja(broj) {
  // provjeravamo uvjet da li je broj paran. % stavaljamo koji izracunava da li broj ide do 0 ili ima ostatka
  // % se naziva modul (modul od broja izracunava automatski da li broj ide do 0)
  if (broj % 2 === 0) {
    console.log(`${broj} je paran`);
  } else {
    console.log(`${broj} je neparan`); // --> ako ima ostatak onda je neparan
  }
}

// pozivamo funkciju i u argument stavljamo neki broj za provjeru da li je paran
provjeraParnogBroja(35);
