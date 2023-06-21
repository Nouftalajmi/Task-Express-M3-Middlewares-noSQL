const express = require('express');
const app = express();
const path = require("path")
const postsRoutes = require('./api/posts/posts.routes');
const connectDb = require('./database');
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const morgan = require("morgan");
connectDb();
app.use(express.json());

app.use((req, res, next) => {
  console.log("I'm a middleware method");
  next();
});
app.use("/media/", express.static(path.join(__dirname, "media")))
app.use(morgan("dev"))
app.use(cors());
app.use('/posts', postsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
