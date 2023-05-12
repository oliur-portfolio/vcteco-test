const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const homeRouter = require("./router/homeRouter");
const companyRouter = require("./router/companyRouter");
const contactRouter = require("./router/contactRouter");
const fdapRouter = require("./router/fdapRouter");
const finletsRouter = require("./router/finletsRouter");
const partnersRouter = require("./router/partnersRouter");
const servicesRouter = require("./router/servicesRouter");

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

// Static Files
app.use(express.static("public"));

app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routing Setup
app.use("/", homeRouter);
app.use("/company", companyRouter);
app.use("/contact", contactRouter);
app.use("/fdap-monitor", fdapRouter);
app.use("/finlets", finletsRouter);
app.use("/partners", partnersRouter);
app.use("/services", servicesRouter);

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
