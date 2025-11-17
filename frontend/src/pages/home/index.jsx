import React from "react";
import api from "../../services/api.js";
import ExpenseCard from "../../components/expense-card/ExpenseCard.jsx";

const Home = ({}) => {
  const nameInput = React.useRef();
  const priceInput = React.useRef();
  const categoryInput = React.useRef();
  const descriptionInput = React.useRef();
  const userData = JSON.parse(localStorage.getItem("user_data"))?.user;
  const [userExpenses, setUserExpenses] = React.useState([]);

  React.useEffect(() => {
    if (!localStorage.getItem("user_data")) {
      window.location.href = "/auth";
    }
    getExpenses();
  }, []);

  async function createExpense() {
    api
      .post("/expense", {
        name: nameInput.current.value,
        category: categoryInput.current.value,
        description: descriptionInput.current.value,
        amount: Number(priceInput.current.value),
        user_id: userData.id,
      })
  }

  async function getExpenses() {
    const res = await api.get(`/expense/${userData.id}`);
    setUserExpenses(res.data);
  }

  return (
    <div>
      {userExpenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          name={expense.name}
          description={expense.description}
          category={expense.category}
          price={expense.price}
          date={new Date(expense.date).toLocaleDateString("pt-BR")}
        />
      ))}

      <div>
        <input placeholder="nome" ref={nameInput}></input>
        <input placeholder="description" ref={descriptionInput}></input>
        <input placeholder="category" ref={categoryInput}></input>
        <input placeholder="price" ref={priceInput}></input>
        <button
          type="button"
          onClick={() => {
            createExpense();
            getExpenses();
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Home;
