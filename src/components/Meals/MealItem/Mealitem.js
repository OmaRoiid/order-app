import classesStyle from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classesStyle.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classesStyle.description}>{props.description}</div>
        <div className={classesStyle.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
