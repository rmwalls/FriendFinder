//Set up array of pals
var pals = [];

function Pal(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

pals.push(new Pal("Lucy Van Pelt", "photos/Lucy_van_Pelt.png", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]));
pals.push(new Pal("Charlie Brown", "photos/Charlie_Brown.png", [3, 1, 3, 2, 5, 1, 2, 5, 3, 3]));
pals.push(new Pal("Snoopy", "photos/Snoopy.jpg", [5, 5, 3, 3, 5, 5, 4, 5, 2, 5]));
pals.push(new Pal("Linus Van Pelt", "photos/Linusvanpelt.gif", [4, 4, 1, 4, 2, 3, 4, 1, 5, 5]));
pals.push(new Pal("Sally Brown", "photos/Sally_Brown.png", [4, 4, 1, 4, 2, 3, 4, 1, 5, 5]));

//console.log("my pals in friends.js " + pals[2].name);
//console.log("WHAT");

module.exports = pals;