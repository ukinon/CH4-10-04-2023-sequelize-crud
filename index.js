const express = require("express");
const morgan = require("morgan");

const router = require("./routes");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(router);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
