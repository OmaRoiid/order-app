import classesStyle from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCxt = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const AddToCartHandler = (enteredAmount) => {
    cartCxt.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmount,
      price: props.price,
    });
  };
  return (
    <li className={classesStyle.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classesStyle.description}>{props.description}</div>
        <div className={classesStyle.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
