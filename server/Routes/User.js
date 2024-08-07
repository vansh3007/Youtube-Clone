import express from "express";
import { login, fetchUserProfile } from "../Controllers/Auth.js";
import {
  updatechaneldata,
  getallchanels,
  pointUpdate,
} from "../Controllers/chennel.js";
const router = express.Router();

router.post("/login", login);
router.patch("/update/:id", updatechaneldata);
router.patch("/pointUpdate/:id", pointUpdate);
router.get("/getallchannel", getallchanels);
router.get("/fetchUserProfile/:id", fetchUserProfile);


export default router