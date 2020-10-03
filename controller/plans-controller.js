const router = require('express').Router();
const asyncWrapper = require('../utility/async-wrapper').AsysncWrapper;
const PlanService = require("../services/plan-service");

const planService = new PlanService();
router.get("/",asyncWrapper(async (req, res) =>{
    let userId = null;
    let plans = await planService.findAll(userId);
    res.send(plans);
}));

router.get(":id", asyncWrapper(async (req, res)=>{
    let userId = req.params.id;
    let plan = await planService.findOne(userId);
    res.send(plan);

}));

router.post("/", asyncWrapper(async (req, res)=>{
    await planService.create(plan);
    res.send(plan);
}));

router.delete(":id", asyncWrapper(async(req, res)=>{
    let userId = req.params.id;
    let int = await planService.deleteOne(userId);
    
}));

module.exports = router;
