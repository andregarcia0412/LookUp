import "./style.button.css";

const Button = ({ icon, text, onClick }) => {
  return (
    <button className="icon-button" onClick={() => {
        onClick()
    }}>
      <img src={icon} />
      {text}
    </button>
  );
};

export default Button;
