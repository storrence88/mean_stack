const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static/views"));

app.listen(6789, () => {
  console.log("Listening on port 6789");
})