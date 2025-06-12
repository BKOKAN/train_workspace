// Dohvaća element sa id-om 'block' koji ćeš pomaknuti
const block = document.getElementById("block");

// Definiraš veličinu bloka i udaljenost pomaka kad blok treba pobjeći
const blockSize = 100; // Veličina kvadratnog bloka (100px)
const moveDistance = 150; // Udaljenost koju blok pomiče kad bježi (150px)

// Sluša događaj miša
document.addEventListener("mousemove", (e) => {
  // Koordinate miša na ekranu
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Dohvaća trenutnu poziciju bloka i njegove dimenzije u odnosu na prozor
  const blockRect = block.getBoundingClientRect();

  // Izračunava centar bloka (koordinate centra na ekranu)
  const blockCenterX = blockRect.left + blockSize / 2;
  const blockCenterY = blockRect.top + blockSize / 2;

  // Izračunava udaljenost miša od centra bloka na X i Y osi
  const distanceX = Math.abs(mouseX - blockCenterX);
  const distanceY = Math.abs(mouseY - blockCenterY);

  // Definiraj "proximity" (koliko blizu mora biti miš da bi blok pobjegao)
  const proximity = 100; // Ako je miš unutar 100px od bloka, blok bježi

  // Dohvaća širinu i visinu ekrana
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Ako je miš unutar 'proximity' (blizu centra bloka)
  if (distanceX < proximity && distanceY < proximity) {
    let directions = []; // Polje za smjerove u kojima blok može pobjeći

    // Provjerava slobodne smjerove u kojima blok može pobjeći
    if (blockRect.left - moveDistance > 0) {
      directions.push("left");
    } // Može li se pomaknuti lijevo?
    if (blockRect.left + blockSize + moveDistance < screenWidth) {
      directions.push("right");
    } // Može li se pomaknuti desno?
    if (blockRect.top - moveDistance > 0) {
      directions.push("up");
    } // Može li se pomaknuti gore?
    if (blockRect.top + blockSize + moveDistance < screenHeight) {
      directions.push("down");
    } // Može li se pomaknuti dolje?

    // Postavljanje početnih pozicija (ako blok ne mijenja poziciju)
    let newLeft = blockRect.left;
    let newTop = blockRect.top;

    // Ako je miš desno od centra bloka
    if (mouseX >= blockCenterX && directions.includes("left")) {
      newLeft = blockRect.left - moveDistance;
    }
    // Ako je miš lijevo od centra bloka
    else if (mouseX < blockCenterX && directions.includes("right")) {
      newLeft = blockRect.left + moveDistance;
    }

    // Ako je miš ispod centra bloka
    if (mouseY >= blockCenterY && directions.includes("up")) {
      newTop = blockRect.top - moveDistance;
    }
    // Ako je miš iznad centra bloka
    else if (mouseY < blockCenterY && directions.includes("down")) {
      newTop = blockRect.top + moveDistance;
    }

    // Ograniči pomak da ne izađe izvan ekrana (ne može biti izvan lijevog, desnog, gornjeg i donjeg ruba ekrana)
    newLeft = Math.max(0, Math.min(newLeft, screenWidth - blockSize));
    newTop = Math.max(0, Math.min(newTop, screenHeight - blockSize));

    // Postavlja novu poziciju bloka
    block.style.left = `${newLeft}px`;
    block.style.top = `${newTop}px`;
  }
});
