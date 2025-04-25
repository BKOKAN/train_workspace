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

  // ${ime} i ${prezime} su varijable i koristimo ih unutar teksta kao poruku korisniku i moraju biti unutar backtick literala ``
  //  ${ime} i ${prezime} vrijednost vucemo iz linije 16 i 22 kada korisnik upise svoje ime i prezime
  pozdrav.innerHTML = `Pozdrav ${ime} ${prezime}!`;
  //   console.log(pozdrav); ---> provjera da li ispisuje <p> `Pozdrav ${ime} ${prezime}!` <p>

  // stavlja paragraf element unutar drugog elementa kao dijete tocnije stvara paragraf element unutar div elementa u ovom slucaju
  prikaziPozdrav.appendChild(pozdrav);

  // nakon submita resetiraj polja za input imena i prezimena
  forma.reset();
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
