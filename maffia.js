function card(name, role, description, image) {
  this.name = name;
  this.role = role;
  this.description = description;
  this.image = image;
}

let deck = [
  new card(
    "Fredrik ",
    "Stadsmänniska",
    "Har ingen funktion under natten",
    "fredrik"
  ),
  new card(
    "Joakim ",
    "Maffia",
    "Väljer en person att döda under natten.",
    "joakim"
  ),
  new card(
    "Sabina ",
    "Doktor",
    "Väljer en person att rädda under natten. ",
    "sabina"
  ),
  new card(
    "Mia ",
    "Polis",
    "Varje natt kan sheriffen undersöka en av spelarna",
    "mia"
  ),
  new card(
    "Fredrik ",
    "Kärleksparet",
    "Båda personer dör om en av de dör",
    "fredrikh"
  ),
  new card(
    "Mimmi ",
    "Skyddsängeln",
    "Skyddsängeln får reda på vilka utav spelarna som är maffia.",
    "mimmi"
  ),
];

function popRandom(deck) {
  let i = (Math.random() * deck.length) | 0;
  return deck.splice(i, 1)[0];
}

document.getElementById("draw").onclick = function () {
  let index = popRandom(deck);

  console.log(index);

  document.getElementById("display").innerHTML =
    '<div class="item-wrapper"><div class="item-card"> <div class="item-image item-image-cartoon"><img src="images/' +
    index.image +
    '.png"></div> <div class="item-name"><h2>' +
    index.name +
    "</h2></div> <div class='item-role'><h2>" +
    index.role +
    "</h2> </div> <div class='item-description'><p>" +
    index.description +
    "</p></div></div>";
};
