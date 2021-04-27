import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className={classes["header"]}>
      <h1>Store</h1>
      <Navigation></Navigation>
    </div>
  );
};

export default Header;
