import "./style.register-expense-card.css";
import React from "react";
import Select from "react-select";

const RegisterExpenseCard = ({ btnOnClick }) => {
  const selectOptions = [
    { value: "food", label: "Food" },
    { value: "transportation", label: "Transportation" },
    { value: "entertainment", label: "Entertainment" },
    { value: "utilities", label: "Utilities" },
    { value: "rent", label: "Rent" },
    { value: "healthcare", label: "Healthcare" },
    { value: "shopping", label: "Shopping" },
    { value: "other", label: "Other" },
  ];

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "40px",
      minHeight: "40px",
      backgroundColor: "#27272A",
      border: "1px solid #3F3F46",
      borderRadius: "8px",
      boxShadow: "none",
      outline: "none",
      paddingLeft: "0px",
      paddingRight: "10px",
      color: "#FFF",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #3F3F46",
      },
    }),

    valueContainer: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100%",
      paddingLeft: "10px",
      paddingTop: 0,
      paddingBottom: 0,
    }),

    singleValue: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
      color: "#FFF",
      lineHeight: "normal",
      transform: "translateY(30px)",
    }),

    placeholder: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      height: "100%",
      margin: 0,
      color: "#FFF",
      opacity: 0.5,
      textAlign: "left",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#FFF",
      padding: "0 8px",
      alignSelf: "center",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#27272A",
      borderRadius: "8px",
      overflow: "hidden",
      zIndex: 10,
      animation: "fadeSlide 0.15s ease-out",
    }),

    menuList: (base) => ({
      ...base,
      paddingTop: 4,
      paddingBottom: 4,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#FFF"
        : state.isFocused
        ? "#FFF"
        : "#27272A",
      color: state.isSelected ? "#000" : state.isFocused ? "#000" : "#FFF",
      padding: "8px 10px",
      cursor: "pointer",
      textAlign: "left",
    }),
  };

  let date = new Date().toISOString().split("T")[0];

  const [selected, setSelected] = React.useState(null);

  return (
    <div className="register-expense-container">
      <h1>Register New Expense</h1>

      <div className="register-input">
        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" />
      </div>
      <div className="register-input">
        <label htmlFor="category">Category</label>
        <Select
          options={selectOptions}
          value={selected}
          onChange={(option) => setSelected(option)}
          placeholder="Select a category"
          styles={selectStyles}
          isSearchable={false}
        />
      </div>
      <div className="register-input">
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
      </div>
      <div className="register-input">
        <label htmlFor="date">Date</label>
        <input type="date" name="date" defaultValue={date} />
      </div>

      <button onClick={btnOnClick}>Add Expense</button>
    </div>
  );
};

export default RegisterExpenseCard;
