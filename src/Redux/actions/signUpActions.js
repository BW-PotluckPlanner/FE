export const SIGN_UP_FOR = "SIGN_UP_FOR";
export const REMOVE_FOOD_SELECTION = "REMOVE_FOOD_SELECTION";

export const signUpForFood = (newFood) => {
  return {
    type: SIGN_UP_FOR,
    payload: newFood,
  };
};

export const removeFoodSelection = (badFoodOption) => {
  return {
    type: REMOVE_FOOD_SELECTION,
    payload: badFoodOption,
  };
};
