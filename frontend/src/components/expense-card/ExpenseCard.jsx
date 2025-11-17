import "./style.expense-card.css";

const ExpenseCard = ({ name, description, category, price, date }) => {
  return (
    <div className="card">
      <p>Expense: {name}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default ExpenseCard;
