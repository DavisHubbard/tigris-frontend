import { useState, useEffect } from "react";
import Item from "./Item";
import classes from "./Items.module.css";
import requests from "../../../services/requests";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const response = requests.fetchItems();
    console.log(response);
    setItems(response);
  }, []);

  return (
    <div className={classes.items}>
      {items.map((item) => {
        return <Item item={item}>item</Item>;
      })}
    </div>
  );
};

export default Items;
