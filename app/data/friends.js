//Set up array of pals
var pals = [];

function Pal(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

pals.push(new Pal("Lucy", "photos/Lucy_van_Pelt.png", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]));
pals.push(new Pal("Charlie Brown", "photos/Charlie_Brown.png", [3, 1, 3, 2, 5, 1, 2, 5, 3, 3]));
pals.push(new Pal("Snoopy", "photos/Snoopy.jpg", [5, 5, 3, 3, 5, 5, 4, 5, 2, 5]));

module.exports = pals;