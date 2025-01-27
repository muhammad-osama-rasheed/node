const express = require("express");
const router = express.Router();
const About = require("../models/about");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newAbout = new About(data);

    const newSavedAboutDesc = await newAbout.save();
    console.log("Data Saved!");
    res.status(200).json({ success: true, description: newSavedAboutDesc });
  } catch (error) {
    console.error("Error Saving About Desc: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await About.find();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Error Fetching About Desc: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const aboutDesc = await About.find({ _id: id });
    // const aboutDesc = await About.findById(id);
    res.status(200).json({ success: true, data: aboutDesc });
  } catch (error) {
    console.error("Error Fetching About Desc by ID: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const data = await About.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ error: "About Desc not found." });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error Updating About Desc: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await About.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({ error: "About Desc not found." });
    }
    res.status(200).json({ message: "Deleted Successfully!" });
  } catch (error) {
    console.error("Error Deleting About Desc: ", error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = router;
