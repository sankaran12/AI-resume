const express = require("express");
const router = express.Router();
const {
  getalldata,
  postdata,
  getsingledata,
  deletedata,
  updatedata,
} = require("../Config/index");

router
  .get("/ai-resumes", getalldata)
  .post("/ai-resumes", postdata)
  .get("/ai-resumes/:id", getsingledata)
  .delete("/ai-resumes/:id", deletedata)
  .put("/ai-resumes/:id", updatedata);

module.exports = router;
