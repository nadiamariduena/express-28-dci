const express = require("express");
const router = express.Router();
const { projects } = require("../data");

//
//
// get ROUTE to get all of the prjects
router.get("/", (req, res) => {
  res.json(projects);
});
//
//
// THEN a route to get just a single project
router.get("/:projectId", setProject, (req, res) => {
  res.json(req.project);
});

//
//
// then this single route to SET the PROJECT for the route in line 14
function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId);
  req.project = projects.find((project) => project.id === projectId);

  if (req.project == null) {
    res.status(404);
    return res.send("Project not found");
  }
  next();
}

module.exports = router;
