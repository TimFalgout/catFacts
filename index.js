import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index", {
        fact: null,
    });
});

app.post("/submit", async (req, res) => {
    try {
    const response = await axios.get("https://meowfacts.herokuapp.com/");
    const fact = response.data.data[0];

    res.render("index", { 
        fact: fact 
    });

    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});








app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
