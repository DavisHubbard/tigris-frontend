import classes from "./Item.module.css";
import Card from "../../UI/Card";

const Item = (props) => {
  return <Card className={classes.item}>{props.item.title}</Card>;
};

export default Item;
