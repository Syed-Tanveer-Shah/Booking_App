import express from "express";
const router = express.Router()
import hotelcontroller from "../controllers/hotelcontroller.js";

router.get('/',hotelcontroller.getAllHotel)
router.post('/',hotelcontroller.createHotel)
router.put('/:id',hotelcontroller.updateHotel)
router.delete('/:id',hotelcontroller.deleteHotel)

export default router