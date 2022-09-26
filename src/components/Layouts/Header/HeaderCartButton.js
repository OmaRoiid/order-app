import classesStyle from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classesStyle.button}>
      <span className={classesStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classesStyle.badge}>4 </span>
    </button>
  );
};

export default HeaderCartButton;
