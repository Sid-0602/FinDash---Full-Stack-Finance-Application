import express  from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async(req, res) => {
    try{
        const kpis = await KPI.fnd(); //fetch kpi obj from model
        res.status(200).json(kpis); //send kpi obj to client.

    }catch{
        res.status(404).json({message: error.message});
    }
});

export default router;
