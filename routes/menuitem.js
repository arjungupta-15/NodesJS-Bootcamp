const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/menus.js");


router.post("/",async (req,res)=>{
    try {
        const data = req.body;

        const newmenus = new MenuItem(data);

        const response = await newmenus.save();
        console.log("data was saved");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Error Problem"})
    }
})
 router.get("/",async(req,res)=>{
    try {
        const data = await MenuItem.find();
        console.log("got data");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
 })

 module.exports = router;