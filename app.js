const express = require("express");
const app = express();
const db = require("./db/db");
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const aboutRoutes = require("./routes/aboutRoutes");

app.use("/about", aboutRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// const data = req.body;
// const newAbout = new About(data);
// newAbout.save((error, data) => {
//   if (error) {
//     console.log("Error Saving About Desc: ", error);
//     res.status(500).json({ error: "Internal Server Error." });
//   } else {
//     res.status(200).json({ success: true, description: data });
//   }
// });

// app.post("/about", async (req, res) => {
//   try {
//     const data = req.body;
//     const newAbout = new About(data);

//     const newSavedAboutDesc = await newAbout.save();
//     console.log("Data Saved!");
//     res.status(200).json({ success: true, description: newSavedAboutDesc });
//   } catch (error) {
//     console.error("Error Saving About Desc: ", error);
//     res.status(500).json({ error: "Internal Server Error." });
//   }
// });

// app.get("/about", async (req, res) => {
//   try {
//     const data = await About.find();
//     res.status(200).json({ success: true, data: data });
//   } catch (error) {
//     console.error("Error Fetching About Desc: ", error);
//     res.status(500).json({ error: "Internal Server Error." });
//   }
// });

// app.get("/about/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const aboutDesc = await About.find({ _id: id });
//     // const aboutDesc = await About.findById(id);
//     res.status(200).json({ success: true, data: aboutDesc });
//   } catch (error) {
//     console.error("Error Fetching About Desc by ID: ", error);
//     res.status(500).json({ error: "Internal Server Error." });
//   }
// });
