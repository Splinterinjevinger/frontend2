


document.addEventListener("DOMContentLoaded", function() {
  /******************************/
  /* menu openen de MENU button */
  /******************************/

  // stap 1: zoek de menu-button op en sla die op in een variabele
  const menuOpenButton = document.querySelector("header > button");
  const deNav = document.querySelector("header nav");

  // stap 2: laat de button luisteren naar kliks
  menuOpenButton.onclick = openMenu;

  // stap 3: in de functie voeg de class toe aan de nav
  function openMenu() {
    deNav.classList.add("toonMenu");
  }

  /************************************/
  /* menu sluiten met de sluit button */
  /************************************/

  // stap 1 - zoek sluiten button op
  const menuSluitButton = document.querySelector("nav button");

  // stap 2 - laat die button luisteren naar kliks
  menuSluitButton.onclick = sluitMenu;

  // stap 3 - in de functie verwijder de class van de nav
  function sluitMenu() {
    deNav.classList.remove("toonMenu");
  }
});

