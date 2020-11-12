function card(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}

let deck = [
  new card("Mimmi", "Bybor", "mimmi"),
  new card("Fredrik", "Maffia", "fredrik"),
  new card("Mia", "Doktor", "mia"),
  new card("Sabina", "Polis", "sabina"),
];

function popRandom(deck) {
  let i = (Math.random() * deck.length) | 0;
  return deck.splice(i, 1)[0];
}

document.getElementById("draw").onclick = function () {
  var index = popRandom(deck);

  console.log(index);

  document.getElementById("display").innerHTML =
    '<img src="images/' +
    index.image +
    '.png"><h3>' +
    index.name +
    "</h3><p>" +
    index.description +
    "</p>";
};
