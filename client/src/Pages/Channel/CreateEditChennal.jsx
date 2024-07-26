import React, { useState } from 'react'
import "./CreateEditChennal.css";
import { useSelector } from "react-redux";
import { updatechaneldata } from "../../Action/ChennelUser";
import { useDispatch } from "react-redux";
import { login } from "../../Action/Auth";
function CreateEditChennal({ seteditcreatechanelbtn }) {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.currentuserreducer);
    const [name, setName] = useState(currUser?.result.name);
    const [desc, setDesc] = useState(currUser?.result.desc);

  const handleClick = () => {
    if (!name) {
    alert("Enter your name")
    }
    else if (!desc) {
    alert("Enter your description")
    }
    else {
     
      dispatch(
        updatechaneldata(currUser?.result._id, { name: name, desc: desc })
      );
     seteditcreatechanelbtn(false);
     setTimeout(() => {
       dispatch(login({ email: currUser.result.email }));
     }, 5000);
    }
   
}


  return (
    <div className="CreateEditChennal">
      <input type="submit" value={"x"} name="text" className="xInput" onClick={() => seteditcreatechanelbtn(false)}></input>
      <div className="CreateEditChennal2">
        <h2>{ currUser?.result.name?<>Edit</>:<>Create</>}</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="CreateEditChennal2Input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <textarea
          type="text"
          name="desc"
          rows={15}
          placeholder="Enter a Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit" value={"Create"} name="text" className="CreateEditChennal2Input"
        onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default CreateEditChennal;
