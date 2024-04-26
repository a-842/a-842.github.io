//{title: "", img: "", type:"[video/board]", genre"", playtime:"[very little/a bit/a moderate amount/a lot/too much]", rating:"[bad/alright/good/very good/amazing]" description:""},


document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  	const games = [
		

	];

  var container = document.getElementById("cards-container");

  games.forEach(function(game) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("item-card");

    var image = document.createElement("img");
    image.src = "game-images/" + game.img;

    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    var title = document.createElement("h1");
    title.textContent = game.title;

    var description = document.createElement("p");
    description.textContent = game.description;

    infoDiv.appendChild(title);
    infoDiv.appendChild(description);
    cardDiv.appendChild(image);
    cardDiv.appendChild(infoDiv);

    container.appendChild(cardDiv);
  });
});
