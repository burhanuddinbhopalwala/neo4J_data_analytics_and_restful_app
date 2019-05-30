const path = require("path");

const express = require("express");
const { check, body } = require("express-validator/check");

const router = express.Router();

const journiesController = require(path.join(
  __dirname,
  "..",
  "controllers",
  "journies.js"
));

// GET /journies/:id
router.get("/:id", journiesController.getJourneyById);

module.exports = router;
