const express = require('express');
const app = express();

console.log(express)
console.log(app);

app.get('/', (req, res) => {
  console.log('The request object is: ', req);
  console.log('The response object is: ', res);
  res.send('Hello Express!');
})

app.listen(6789, () => {
  console.log('Listening on port 6789');
})