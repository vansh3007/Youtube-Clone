import { combineReducers } from "redux";
import authReducer from "./Auth";
import currentuserreducer from "./CurrUser"
import chanelreducer from "./Chennel"
import videoreducer from "./Video"
import commentreducer from "./Comment";
import historyreducer from "./History";
import likedvideoreducer from "./LikedVideo";
import watchlaterreducer from "./WatchLater";

export default combineReducers({
  authReducer,
  currentuserreducer,
  chanelreducer,
  videoreducer,
  commentreducer,
  historyreducer,
  likedvideoreducer,
  watchlaterreducer
});
