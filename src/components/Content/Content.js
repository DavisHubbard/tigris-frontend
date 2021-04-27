import classes from "./Content.module.css";
import { Switch, Route } from "react-router-dom";
import Items from "./Items/Items";

const Content = () => {
  return (
    <div className={classes.content}>
      <Switch>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
};

export default Content;
