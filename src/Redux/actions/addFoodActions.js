import axios from "axios";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getFoodData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://potluck-planner1220.herokuapp.com/api/food")
    .then((res) => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data,
      });
      console.log(res.data, "getData success");
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: `${err.message}`,
      });
    });
};
