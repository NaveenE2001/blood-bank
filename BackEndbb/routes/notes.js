const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("usn", "Enter a valid usn").isLength({ min: 10 }),
    body("name", "Name must be atleast 5 characters").isLength({
      min: 5,
    }),

    body("date", "enter the valid date").isDate(),
    body("email", "Enter a valid email").isEmail(),
    body("bloodgroup", "Enter a valid blooodgroup").isLength({ min: 3 }),
    body("branch", "Enter a valid branch").isLength({ min: 3 }),
    body("phoneno", "Enter a valid phoneno").isLength({ min: 3 }),
    body("addess", "Enter a valid addess").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const { usn, name, date, email, bloodgroup, branch, phoneno, addess } =
        req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        user: req.user.id,
        usn,
        name,
        date,
        email,
        bloodgroup,
        branch,
        phoneno,
        addess,
      });
      const savedNote = await note.save();
      console.log(savedNote);
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { usn, name, date, email, bloodgroup, branch, phoneno, addess } =
    req.body;
  try {
    // Create a newNote object
    const newNote = {};
    if (usn) {
      newNote.usn = usn;
    }
    if (name) {
      newNote.name = name;
    }
    if (date) {
      newNote.date = date;
    }
    if (email) {
      newNote.email = email;
    }
    if (bloodgroup) {
      newNote.bloodgroup = bloodgroup;
    }
    if (branch) {
      newNote.branch = branch;
    }
    if (phoneno) {
      newNote.phoneno = phoneno;
    }
    if (addess) {
      newNote.addess = addess;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/fetchbyid/:id", fetchuser, async (req, res) => {
  const noteId = req.params.id;
  const userId = req.userId;

  Note.findById(noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send("Note not found");
      }

      res.json(note);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving note");
    });
});

module.exports = router;
