const router = require("express").Router();
const todoController = require("./todo.controller");

router.get("/", (req, res)=>{
    res.send("TODO API running");
});

router.get("/", async (req, res) => {
    const todoResult = await todoController.create(req.body);
    res.json({ data: todoResult});
});

module.exports = router;