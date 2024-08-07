import React from "react";
import "./Description.css";
import { useSelector } from "react-redux";

function Description({
  cid,
  setVidUploadPage,
  seteditcreatechanelbtn
}) {
  const chennel = useSelector((state) => state.chanelreducer);
  const currUser = useSelector((state) => state.currentuserreducer);

  const currChennel = chennel.filter((c) => c._id == cid);


  if (!currChennel || !currUser || !currUser.result) {
    return <div>Loading...</div>;
  }
  return (
    <div className="chennelDescription">
      <div className="chanel_logo_chanel">
        <b>{currUser.result.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currChennel[0].name}</b>
        <p>{currChennel[0].desc}</p>
        {/* <p>{currChennel[0].points}</p> */}
      </div>
      {currUser.result._id === currChennel[0]._id && (
        <>
          <p
            className="editbtn_chanel"
            onClick={() => seteditcreatechanelbtn(true)}
          >
            <i className="fa-regular fa-pen-to-square"></i> Edit Channel
          </p>
          <p
            className="uploadbtn_chanel"
            onClick={() => {
              setVidUploadPage(true);
            }}
          >
            <i className="fa-solid fa-upload"></i> Upload Video
          </p>
        </>
      )}
    </div>
  );
}

export default Description;
