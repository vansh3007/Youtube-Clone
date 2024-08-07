const profilereducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      // console.log("Reducer Action Payload:", action.payload); // Add this to verify the action payload
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default profilereducer;
