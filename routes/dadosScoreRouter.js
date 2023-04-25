const router = require("express").Router();

const dadosScoreController = require("../controllers/dadosScoreController");

router
    .route("/")
    .post((req, res) => dadosScoreController.create(req, res));

router
    .route("/")
    .get((req, res) => dadosScoreController.getAll(req, res));

router
    .route("/:id")
    .get((req, res) => dadosScoreController.get(req, res));

router
    .route("/:id")
    .delete((req, res) => dadosScoreController.delete(req, res));

router
    .route("/:id")
    .patch((req, res) => dadosScoreController.update(req, res));

module.exports = router;
