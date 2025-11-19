import "./style.home-header.css";
import Button from "../button/Button";
import Add from "../../assets/add.svg";

const HomeHeader = ({ btnOnClick }) => {
  return (
    <header className="home-header">
      <Button text="Add Expense" onClick={btnOnClick} icon={Add} />
    </header>
  );
};

export default HomeHeader;
