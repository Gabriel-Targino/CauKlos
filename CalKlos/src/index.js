const fs = require("fs");
const express = require("express");
const { dbfile } = require("./db");
const Migration = require("./migrations");
const routes = require('./routers');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
(async () => {
  if (!fs.existsSync(dbfile)) {
    await Migration.up();  
  }
})();
app.listen(3000, () => {
  console.log("app is running");
}); 