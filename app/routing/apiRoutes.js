var friends = require('../data/friends.js'); 

module.exports = function (app) {

  // when 'API Friends List' is clicked show variable data as json, this works
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // handle the post request from the survey form
  app.post("pals", function (req, res) {

    var surveyResults = req.body; // save user answers (scores)
    console.log("line 21" + surveyResults);
    // convert the values to integers
    for (var i = 0; i < surveyResults.length; i++) {
      surveyResults[i] = parseInt(surveyResults[i]);
      console.log("25 results are " + surveyResults);
    }
  })

/*
  totalDifference = 999999; // start with a high dummy value
  bestMatch = 0; // assume the first pet is the best match then adjust later

  // loop through the pals array
  for (i = 0; i < pals.length; i++) {
    var tempDifference = difference(surveyResults, pals[i].scores);
    console.log("difference between", surveyResults, "and", pals[i].name, pals[i].scores, "=", tempDifference);

      if (tempDifference < totalDifference) {
        totalDifference = tempDifference;
        bestMatch = i;
      }
  } //end for

  function difference(array1, array2) {

    // differenceAmount holds the difference between array values
    var differenceAmount = 0;

      for (var i = 0; i < array1.length; i++) {
        differenceAmount += Math.abs(array1[i] - array2[i]);
      }
    return differenceAmount;
  }

  // send the bestMatch back to the html page in response to the post
  res.send(pals[bestMatch]);
  */
};