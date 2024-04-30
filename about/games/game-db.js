//{title: "", img: "", type:"[video/board]", genre"", playtime:"[very_little/a_bit/a_moderate_amount/a_lot/too_much]", rating:"[bad/alright/good/very_good/amazing]" description:""},


document.addEventListener("DOMContentLoaded", function() {
  	const games = [
		{title: "Cuphead", img: "cuphead-header.jpeg", type:"video", genre"run_&_gun", playtime:"a_moderate_amount", rating:"very_good" description:"An amazing indie shoot 'em up to relax with and bring a sense of nostalgia from the graphics and soundtrack."},
		{title: "Hollow Knight", img: "hollow-knight-header.jpg", type:"video", genre"metroidvania", playtime:"too much", rating:"amazing" description:"The First real pc game I played, and I still come back to this very fondly - but only with some of the skills I mastered first time round!"},
		{title: "Dominion_-Prosperity", img: "dominion-prosperity-header.jpg", type:"board", genre"deck_building", playtime:"a_lot", rating:"very good" description:"The Colonies and Platinums extend the game to create absurd builds that are infeasible with other sets."},
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
