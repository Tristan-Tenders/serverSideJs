const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/auth-middleware");
const { getAll, getById, create, update, remove } = require("../controllers/courseController");

router.get("/", authCheck, getAll);
router.get("/:id", authCheck, getById);
router.post("/", authCheck, create);
router.put("/:id", authCheck, update);
router.delete("/:id", authCheck, remove);

module.exports = router;
