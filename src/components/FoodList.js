import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFoodData } from "../Redux/actions/addFoodActions";
import FoodListItem from "./FoodListItem";
import axios from "axios";
import axiosWithAuth from "../api/axiosWithAuth";

const FoodList = (props) => {
  const [foodArray, setFoodArray] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`api/potluck/${props.pId}`)
      .then((res) => {
        console.log(res);
        setFoodArray(res.data.food);
      })
      .catch((err) => console.log(err, "error"));
    console.log(foodArray, "ATTN");
    // setFoodArray(props.foodName);
    // console.log(props, "PROPS");
  }, []);

  return (
    <div>
      <ul>
        {foodArray.map((e) => (
          <FoodListItem name={e.name} id={e.pId} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    foodName: state.foodName,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFoodData })(FoodList);
