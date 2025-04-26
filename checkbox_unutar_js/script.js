// 1. Napravi funkciju koja prima 2 broja kao argumenti i zbraja ta dva broja i vraca zbroj
function Zbroj(broj1, broj2) {
  const zbroj = broj1 + broj2;
  return zbroj;
  // return console.log(zbroj); ---> ako pise da ispises u konzoli
}

// 2. Nakon klika na paragraf element sa klasom "stvori-element" stvori novi paragraf element sa tekstom "Hello world" (EVENT listner)
// 1 dio moras izdvojiti paragraf element iz htmla sa klasom "stvori-element"
// 2 dio moras napravi event listener kada kliknes na paragraf element sa klasom "stvori-element"
// 3 dio zadatka napraviti novi paragraf element nakon klika
// 4 dio zadatka napraviti da unutar novo paragraf elementa ima sadrzaj "Hello world"
const paragraf = document.getElementsByClassName("stvori-element"); // izvojili smo element iz html dokumenta prvi dio zadatka
//nakon izdvajanja elemnta radimo event listener drugi dio zadatka
paragraf.addEventListener("click", function (event) {
  // treci dio zadatka stvaramo novi paragraf element
  const stvoriNoviElement = document.createElement("p");
  // cetvrti dio zadatka novi paragraf element ima tekst koji je zadan u zadatku
  stvoriNoviElement.innerHTML = "Hello world";
});

// 3. napravi event listener koji ce nakon submita uzeti podatke upisane od strane korisnika u input elemntu i prikazati ih na ekran pomocu novo paragraf elemnta
// 1 dio treba nam input element izdvojen iz htmla
// 2 dio treba nam elemnt koji simulira submit izdvojent iz htmla (moze biti button sa typon submit)
// 3 event listener koji ce nakon inputa uzeti podatke i spremiti ih negdje
// 4 prikazi te podatke unutar novog paragraf elementa

const input = document.getElementsByTagName("input"); // izdvaja tocan element iz htmla cija je oznaka input ( <input /> ) tocna html oznaka --- 1 dio zadatka
const submitButton = getElementsById("submit"); // mora imati id = "submit" -- drugi dio zadatka
const podatak = "";
// treci dio zadatka -- nakon input spremanje podatka sto je korinsik upisao
input.addEventListener("input", function (event) {
  podatak = event.target.value; // Sto je korisnik upisao unutar input elementa spremamo u varijablu podatak
});
// cetvrti dio - stvoriti novi paragraf element i unutar njega prikazati podatak od korisnika nakon sumbita ( EVENT LISTNER )
submitButton.addEventListener("submit", function (event) {
  const noviParagraf = document.createElement("p");
  const div = document.createElement("div"); // stvaramo novi div da bih mogli staviti paragraf element unutar diva za prikaz
  noviParagraf.innerHTML = `Podatak od korinsika je ${podatak}`; // posto je u pitanju koristenje varijable iz java script unutar html teksta koristimo back tick literale da mozemo tu varijablu prikazati
  div.appendChild(noviParagraf); // stavljamo paragraf element unutar div elemnta za prikaz na ekran
});

// 4. Napravi funkciju koja prima 2 broja kao argumenti i provjerava uvjet da li je prvi broj veci ili jednak od drugog ako je vraca prvi, ako nije vraca drugi broj
// 1 dio je funckija koja prima 2 argumenta
// 2 dio provjerava uvjet da li je prvi broj veci ili jednak od drugog ako je vraca prvi, ako nije vraca drugi broj

// prvi dio
function provjerava(broj1, broj2) {
  // drugi dio
  if (broj1 >= broj2) {
    return broj1;
  } else {
    return broj2;
  }
}

// 5. Napravi funkciju koja provjerava da li je broj paran
// prvi dio funckija koja prima broj kao argument
// drugi dio provjerava da li je paran
// prvi dio
function daLiJeBrojParan(broj) {
  if (broj % 2 === 0) {
    console.log(`${broj} je paran`);
  } else {
    console.log(`${broj} je neparan`);
  }
}
// npr petlja sa nizon unutar funkcije
// dobit ces niz brojeva npr. const brojevi = [31, 42, 52, 18, 97]
// trazi cete da napravis funckiju koja provjerava brojeve u nizu da li su parni
// 1 dio funkcija koja prima niz kao argument
// 2 dio radis for petlju koja izdvaja pojedini broj i provjerava da li je paran

// 1 dio
function provjeraNiza(niz) {
  // 2 dio
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
      console.log(`${niz[i]} je paran`);
    } else {
      console.log(`${niz[i]} je neparan`);
    }
  }
}

// 6. Napravi petlju koja provjerava najduzu rijec unutar niza ili array const imena = ["Petar", "Ivana", "Valentina", "Renato", "Iva"];
// 1 dio napravit petlju koja ide kroz niz imena
// 2 dio u petlji provjeravamo najdulju rijec

// prvi dio
const imena = ["Petar", "Ivana", "Valentina", "Renato", "Iva"];
for (i = 0; i < imena.length; i++) {
  // moramo imati varijablu u koju cemo spremati najduzu rijec
  const najduzaRijec = "";
  // drugi dio
  // provjeravamo trenutnu rijec iz niza da li je duza od rijeci koju smo pohranili u varijablu najduzaRijec
  if (najduzaRijec < imena[i]) {
    najduzaRijec = imena[i];
  }
}

// 7. Napravi funkciju koja prima niz ili array kao argument i funkcija mora vracati najduzu rijec
// 1 dio napraviti funkciju koja prima niz kao argument
// 2 dio unutar funkcije zadati da obradi taj niz i pronade najduzu rijec

function longestWord(niz) {
  for (i = 0; i < niz.length; i++) {
    // moramo imati varijablu u koju cemo spremati najduzu rijec
    const najduzaRijec = "";
    // drugi dio
    // provjeravamo trenutnu rijec iz niza da li je duza od rijeci koju smo pohranili u varijablu najduzaRijec
    if (najduzaRijec < niz[i]) {
      najduzaRijec = niz[i];
    }
  }
}
// primjer pozivanja funkcije ako je zadan niz koju moras provjerit npr. const imena1 = ["Petar", "Ivana", "Valentina", "Renato", "Iva"];
// pozivanje funkcije
const imena1 = ["Petar", "Ivana", "Valentina", "Renato", "Iva"];
longestWord(imena1); // pozivas funkciju od gore u argument stavljas niz ili array koji ti je zadan u zadatku u ovom primjeru je bio imena1

// 8. Napravi definciju funkcije koja prima niz ili array kao argument i funkcija mora vracati najveci broj
// 1 dio funkcija koja prima niz kao argument
// 2 dio funcija mora proci kroz taj niz i vratiti najveci broj

// 1 dio definicija
function highestNumber(niz) {
  for (i = 0; i < niz.length; i++) {
    // radimo varijablu u koju spremamo
    const najveciBroj = 0;
    // 2 dio
    if (najveciBroj < niz[i]) {
      najveciBroj = niz[i]; // ako je najveciBroj manji od trenutnog broja kojeg provjeravamo iz niza onda cemo ga pohraniti unutar najveciBroj
    }
  }
  return najveciBroj; // ovo je samo vratiti iz funkcije
  // ako te trazi da ispises u konzoli onda ide "return conosole.log(najveciBroj);"
}

// primjer za pozivanje funkcije i zadali su niz const brojevi = [31, 42, 52, 18, 97]
highestNumber(brojevi);
// ako ti zadaju da ispises sto funkcija vraca u konzoli
console.log(highestNumber(brojevi)); // ispis u konzoli unutar console.log() pozivamo funkciju highestNumber() sa nizom koji je zadan u zadataku npr. brojevi console.log(highestNumber(brojevi))

// 9. Deklarirajte i inicijalizirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom (" ") između imena i prezimena
// 1 dio napraviti varijable firstName i lastName
// 2 dio spojiti ih u fullName

// 1 dio
const firstName = "Ivana";
const lastName = "Perko";

// 2 dio
const fullName = firstName + " " + lastName;

// 10. Deklarirajte varijable y i z te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable x.
// var x = z === 2 ? y : 5;
// 1 dio definirati z i y varijable
// 2 dio razvojiti var x = z === 2 ? y : 5; u if uvjete (grananje)
// 3 dio ispisati dobivenu vrijednost console.log();

// 1 dio
const z = 10;
const y = 5;

// 2 dio
if (z === 2) {
  x = y;
} else {
  x = 5;
}

// 3 dio
console.log(x);

// 11. Napravi 2 event lisenter. Prvi prima input vrijednost od strane korisnika i drugi prikazuje tu vrijednost u paragraf elementu koji vec postoji u html dokumentu

// 1 dio izdvojit input element iz htmla u java script
// 2 dio napravi event listner koji prima vrijednost input elemnta od strane korisnika
// 3 dio izdvojiti paragraf element iz htmla u java script
// 4 dio napravi koji ce prkazati to na ekran u paragraf elementu unutar html dokumenta

// 1 dio
// moramo napravit varijablu u koju cemo spremiti input vrijednost od korisnika
const vrijednostKorisnika = "";
const input1 = document.querySelector("input");
input1.addEventListener("input", function (event) {
  // 2 dio
  vrijednostKorisnika = event.target.value;
});

// 3 dio
const paragraf1 = document.querySelector("p");

// 4 dio
paragraf1.innerHTML = `Dobili smo vrijednost od korisnika ${vrijednostKorisnika}`;
