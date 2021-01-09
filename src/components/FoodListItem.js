import React, { useState, useEffect } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

const FoodListItem = (props) => {
  console.log(props, "FOOD LIST ITEM PROPS");
  const [guest, setGuest] = useState("");
  const id = localStorage.getItem("userId");
  console.log("userId", id);

  /// "You are now bringing ${props.name}"
  useEffect(() => {
    axiosWithAuth()
      .get(`api/potluck/${props.pId}/bringfood`)
      .then((res) => {
        // console.log(res);
        setGuest(res.userId);
      })
      .catch((err) => console.log(err, "error foodListItem"));
  }, []);

  const foodClicked = () => {
    if (guest && guest === props.pId) {
      axiosWithAuth()
        .delete(`api/potluck/${id}/bringfood`)
        .then((res) => {
          console.log(res);
          setGuest(id);
        })

        .catch((err) => console.log(err, "error delete"));
    } else if (!guest) {
      axiosWithAuth()
        .post(`api/potluck/${props.pId}/bringfood`, {
          userId: id,
          foodId: props.foodId,
        })
        .then((res) => {
          console.log(res);
          setGuest("You are now bringing this!");
        })
        .catch((err) => console.log(err, "error post"));
    }
  };

  console.log(
    props.usersBringing,
    "These users are bringing this ITEM ********"
  );

  return (
    <li className={guest ? "strike" : "unstruck"} onClick={foodClicked}>
      {props.name}
      {!!guest && <p>{guest}</p>}
    </li>
  );
};

export default FoodListItem;
