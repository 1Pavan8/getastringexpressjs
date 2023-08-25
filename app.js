const exp = require("express");
const app = exp();

module.exports = app.get("/", (request, response) => {
  response.send("Express JS");
});

app.listen(3000);
