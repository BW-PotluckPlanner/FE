//Ryan

import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getFoodData } from "../Redux/actions/addFoodActions";
import axiosWithAuth from "../api/axiosWithAuth";

const AddFood = (props) => {
  const [foodList, setFoodList] = useState({
    name: "",
    pId: 0,
  });
  const [post, setPost] = useState();
  // console.log(props);

  const handleChanges = (e) => {
    setFoodList({ ...foodList, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/food", {
        name: foodList.name,
        pId: props.event.id,
      })
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <form onSubmit={formSubmit}> */}
      <form onSubmit={(e) => formSubmit(e)}>
        <label>What do we need?</label>
        <input
          name="name"
          id="food"
          value={foodList.name}
          type="text"
          onChange={handleChanges}
        />
        <button type="submit">Submit</button>
      </form>
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

export default connect(mapStateToProps, { getFoodData })(AddFood);
