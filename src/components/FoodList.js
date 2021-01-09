import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFoodData } from "../Redux/actions/addFoodActions";
import FoodListItem from "./FoodListItem";
import axios from "axios";
import axiosWithAuth from "../api/axiosWithAuth";

const FoodList = (props) => {
  const [foodArray, setFoodArray] = useState([]);
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    props.getFoodData();
    axiosWithAuth()
      .get(`api/potluck/${props.pId}`)
      .then((res) => {
        console.log(res);
        setFoodArray(res.data.food);
        setUserArray(res.data.usersBringing);
        console.log(res.data, "ATTN");
      })
      .catch((err) => console.log(err, "error"));

    // setFoodArray(props.foodName);
    console.log(props, "PROPS FROM FOODLIST");
  }, []);
  console.log(foodArray, "FOODname     :****  ");
  return (
    <div>
      <ul>
        {foodArray.map((e) => (
          <FoodListItem
            pId={props.pId}
            foodId={e.id}
            name={e.name}
            usersBringing={userArray}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    foodName: state.foodName,
    foodId: state.foodId,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFoodData })(FoodList);
