const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user-routes");
// const { connectToDatabase } = require("./config/connect");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect DB

// connectToDatabase();

// -------- Routes ------------ //

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
