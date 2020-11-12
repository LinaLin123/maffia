function card(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}

let deck = [
  new card("Jimmy", "Bybor", "jimmy1"),
  new card("Peter", "Maffia", "peter1"),
  new card("Hans", "Doktor", "hans1"),
  new card("Tommy", "Polis", "tommy1"),
  new card("Martin", "Maffia", "martin1"),
  new card("Sahir", "Maffia", "sahir1"),

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
