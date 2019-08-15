const path = require("path")
let pals = require('../data/friends.js'); // get the pals from the constructor
var newPalScores = 0; //scores from survey.html
var answers; //set up a place for the answers
var totalDifference = 0; // use to store difference in scores between pals

console.log("in apiRoutes, line 7");
module.exports = function (app) {
  // when 'API Friends List' is clicked show variable data as json, this works
  app.get("/api/friends", function (req, res) {
    res.json(pals);
  }); //end appget

  console.log("in apiRoutes, line 14");
  // handle the post request from the survey form
  app.post("/api/friends", function (req, res) { 

    let newPal = { //do stuff with the user entry
      name: "",
      photo: "",
      palDiff: ""
    }; //end newPal

    answers = req.body; // user answers sent from survey.html
    newPalScores = answers.scores;
    console.log("line 28, new pal scores = " + newPalScores);
    console.log("line 29 new Pal name is " + answers.name);

    // loop through the pals array
    for (var i = 0; i < pals.length; i++) {
      //console.log("pals[i] is " + pals[i].name);
      totalDifference = 0;
      for (var j = 0; j < pals[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(newPalScores[j]) - parseInt(pals[i].scores[j]));
        console.log("total difference is " + totalDifference);
        if (totalDifference <= newPal.palDiff) {
          newPal.name = pals[i].name;
          console.log(NewPal.name);
          newPal.photo = pals[i].photo;
          console.log(newPal.photo);
          newPal.palDiff = totalDifference;
          console.log("diff = " + newPal.palDiff);

          console.log("Best match is " + newPal.name);
        } //end if
      } //end for inner
    } //end for outer
    pals.push(answers);

    res.json(newPal);
  }) //end appPost
  
}; //end module