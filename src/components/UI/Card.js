import classesStyle from "./Card.module.css";

const Card = (props) => {
  return <div className={classesStyle.card}>{props.children}</div>;
};

export default Card;
