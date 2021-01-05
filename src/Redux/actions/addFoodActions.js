import axios from "axios";
export const FETCH_DATA_START = "DATA_START";
export const FETCH_DATA_SUCCESS = "DATA_SUCCESS";
export const FETCH_DATA_FAIL = "DATA_FAIL";

export const getFoodData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("")
    .then((res) => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data,
      });
      console.log(res, "getData success");
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: `${err.message}`,
      });
    });
};
