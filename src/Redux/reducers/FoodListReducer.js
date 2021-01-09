import {
  FETCH_DATA_FAIL,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from "../actions/addFoodActions";

const initialState = {
  foodName: [],
  foodId: [],
  is_loading_data: false,
  error: "",
};

export const FoodListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        is_loading_data: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        is_loading_data: false,
        foodName: action.payload,
        foodId: action.payload.id,
        error: "",
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        is_loading_data: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
