import classesStyle from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const onClick = () => {
    props.onClick();
  };

  const btnClasses = `${classesStyle.button} ${
    btnIsHighlighted ? classesStyle.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={onClick} className={btnClasses}>
      <span className={classesStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classesStyle.badge}>{numOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
