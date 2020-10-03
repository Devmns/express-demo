const router = require('express').Router();
const asyncWrapper = require('../utility/async-wrapper').AsysncWrapper;
const PlanService = require("../services/plan-service");

const planService = new PlanService();
router.get("/",asyncWrapper(async (req, res) =>{
    let userId = null;
    let plans = await planService.findAll(userId);
    res.send(plans);
}));

router.get(":id", (req, res)=>{

});

router.post("/", (req, res)=>{

});

router.delete(":id", (req, res)=>{

});

module.exports = router;
