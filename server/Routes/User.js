import express from "express";
import { login } from "../Controllers/Auth.js";
import {updatechaneldata,getallchanels} from  "../Controllers/chennel.js"
const router = express.Router();

router.post("/login", login);
router.patch("/update/:id", updatechaneldata);
router.get("/getallchannel", getallchanels);


export default router