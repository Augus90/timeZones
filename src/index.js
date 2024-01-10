const { config } = require("./config/config");
const express = require("express");
// const morgan = require('morgan');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../test/swagger-output.json');

const routerApi = require("./router/routes");
const app = express();

const PORT = config.port;

// app.use(morgan('dev'));
app.use(express.json());

// app.get("/", function (req, res) {
//   res.sendStatus(200);
// });

routerApi(app);

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`--- ✔ Server started on port ${PORT}`);
});
