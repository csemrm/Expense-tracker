import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    console.log(expenseData);
    props.onAddExpanse(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={onSaveExpanseDataHandler} />
    </div>
  );
};

export default NewExpense;
