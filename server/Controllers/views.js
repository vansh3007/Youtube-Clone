import videofile from "../Models/Videofile.js";
import mongoose from "mongoose";
export const viewscontroller = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("video unavailable..");
  }
  try {
    const files = await videofile.findById(id);
    const Views = files.views;
    const updateview = await videofile.findByIdAndUpdate(id, {
      $set: { views: Views + 1 },
    });
    res.status(200).json(updateview);
  } catch (error) {
    res.status(400).json("error", error);
  }
};
