
// Routes
// =============================================================
var friends = require('../data/friends.js'); //get correct path
var totalDifference; //use Math.abs()
var bestMatch; //lowest totalDifference, if tie....random or first


module.exports = function(app) {
    // API GET Request
  
// if user goes to /api/friends, send them the variable data as json
app.get("/api/friends", function(req, res) {
  res.json(pals);
});

// post new responses to the pals array do logic
app.post("/api/friends", function(req, res) {
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      return;
    }
  })
}

// Determine the user's most compatible friend using the following as a guide:
//   Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
//   With that done, compare the difference between current user's scores against those from other users, question by question. 
//Add up the differences to calculate the totalDifference.

// Example:

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. 
// Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.