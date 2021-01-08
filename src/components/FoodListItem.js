import React, { useState, useEffect } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

const FoodListItem = (props) => {
  console.log(props);
  const [guest, setGuest] = useState("");
  useEffect(() => {
    axiosWithAuth()
      .get(`api/potluck/${props.pId}/bringfood`)
      .then((res) => setGuest(res.userId))
      .catch((err) => console.log(err, "error foodListItem"));
  }, []);

  const foodClicked = () => {
    if (guest && guest === props.pId) {
      axiosWithAuth()
        .delete(`api/potluck/${props.userId}/bringfood`)
        .then((res) => {
          console.log(res);
          setGuest(props.userId);
        })

        .catch((err) => console.log(err, "error delete"));
    } else if (!guest) {
      axiosWithAuth()
        .post(`api/potluck/${props.pId}/bringfood`, {
          userId: props.userId,
          foodId: props.id,
        })
        .then((res) => setGuest(props.userId))
        .catch((err) => console.log(err, "error post"));
    }
  };

  return (
    <li className={guest ? "strike" : "unstruck"} onClick={foodClicked}>
      {props.name}
      {!!guest && <p>{guest}</p>}
    </li>
  );
};

export default FoodListItem;
