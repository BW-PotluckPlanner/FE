//1. Create a new list item component. FoodListItem.js
//2. Make a get request to an endpoint to see if someone clicked
//2a. getPersonBringing(id) -> either empty or the name of the person who clicked (put into state var)
//2b. If empty do nothing
//2c. If not empty then you can attach a css class to the link element to strike it through, you can also create a new <p> component with the name of the person
//3. Just return a link element
//4. Add a click event to the list item
//4a. Post to the new API -> responds with name
//4b. Take that name and put it into the state variable

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
