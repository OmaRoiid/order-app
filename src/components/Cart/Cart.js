import Modal from "../UI/Modal";
import classesStyle from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      <ul className={classesStyle["cart-items"]}>{cartItems}</ul>
      <div className={classesStyle.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classesStyle.actions}>
        <button className={classesStyle["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classesStyle.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
