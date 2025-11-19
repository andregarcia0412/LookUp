import "./style.neon-card.css";

const NeonCard = ({ icon, title, subtitle, color }) => {
  return (
    <div className={`neon-card ${color}`}>
      <div className={`neon-icon-container ${color}-icon`}>
        <img src={icon}></img>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default NeonCard;
