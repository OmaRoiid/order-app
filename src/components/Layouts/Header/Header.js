import mealsImg from "../../../assets/meals.jpeg";
import classesStyle from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classesStyle.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classesStyle["main-image"]}>
        <img src={mealsImg} alt="meals img" />
      </div>
    </>
  );
};

export default Header;
