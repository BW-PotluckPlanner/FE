import React, { useState, useEffect } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

const FoodListItem = (props) => {
  const [guest, setGuest] = useState("");
  useEffect(() => {
    axiosWithAuth()
      .get(``)
      .then((res) => setGuest(res.userId))
      .catch((err) => console.log(err, "error foodListItem"));
  }, []);

  const foodClicked = () => {
    if (guest && guest === props.userId) {
      axiosWithAuth()
        .delete(``)
        .then((res) => setGuest(props.userId));
    } else if (!guest) {
      axiosWithAuth()
        .post(``)
        .then((res) => setGuest(props.userId));
    }
  };

  return (
    <li className={guest ? "strike" : ""} onClick={foodClicked}>
      {props.name}
      {!!guest && <p>{guest}</p>}
    </li>
  );
};

export default FoodListItem;
