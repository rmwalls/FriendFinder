// Routes
// =============================================================
module.exports = function(app) {
    // API GET Requests
  
// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(tableData);
    
}); 

app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  })
}