//require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const PlansController = require('./controller/plans-controller');
app.use(PlansController);

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});