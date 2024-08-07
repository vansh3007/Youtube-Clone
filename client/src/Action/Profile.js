import * as api from "../API";

export const fetchUserProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserProfile(id);
    // console.log("API Response Data:", data); // Add this to verify the response
    dispatch({ type: "FETCH_PROFILE", payload: data });
  } catch (error) {
    console.log("API Error:", error); // Log any API errors
  }
};
