let pals = require('../data/friends.js'); 
var newPalScores = 0; //scores from survey.html
var answers;
console.log("in apiRoutes, line 3");
module.exports = function (app) {
  // when 'API Friends List' is clicked show variable data as json, this works
  app.get("/api/friends", function (req, res) {
    res.json(pals);
  }); //end appget

  console.log("in apiRoutes, line 10");
  // handle the post request from the survey form
  app.post("friends", function (req, res) { //changed from friends to answers 6:11pm, back to friends 7:56pm
    console.log("line 12, posted pals" + pals);
    let newPal = {
      name: "",
      photo: "",
      palDiff: 1000
    }; //end newPal

console.log(newPal);
    answers = req.body; // save user answers (scores)
    console.log("line 20" + answers);
    newPalScores = answers.scores;
    console.log("line22, scores = " + newPalScores);
  }) //end appPost

  totalDifference = 0; // use to store difference in scores between pals

  // loop through the pals array
  for (var i = 0; i < pals.length; i++) {
    console.log(pals[i]);
    for (var j = 0; j < pals[i].scores[j]; j++) {
      totalDifference =+ Math.abs(parseInt(newPalScores[j]) - parseInt(pals[i].scores[j]));
        if (totalDifference <= newPal.palDiff) {
          newPal.name = pals[i].name;
          newPal.photo = pals[i].photo;
          newPal.palDiff = totalDifference;
        } //end if
    } //end for inner
  } //end for outer

  //pals.push(answers);

  //res.json(newPal);
}; //end module