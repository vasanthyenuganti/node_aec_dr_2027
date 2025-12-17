// PATH  -- /:
// QUERY -- /?name=vasanth
// BODY -- {}


const express = require("express");

const app = express();

app.use(express.json());

// initial
app.get("/", (req, res) => {
    res.send("Server Working");
})

// api
app.get("/api", (req, res) => {
    res.send("Api is working fine");
})

// path params
app.get("/api/user/:roll", (req, res) => {
    res.send({ "rollNumber": req.params.roll });
})

// query
// http://localhost:4000/api/users/search?name=vasanth&roll=237
app.get("/api/users/search", (req, res) => {
    console.log(req.query);
    const { roll, name } = req.query;
    res.send({ "name": name, "roll": roll });
});


app.post("/api/users/add", (req, res) => {
    console.log(req.body);

    const { roll, name, email, college, branch } = req.body;

    res.send({ "first_name": name, "roll_number": roll });
})

app.listen(4000, () => {
    console.log("Server started at 4000");
});



