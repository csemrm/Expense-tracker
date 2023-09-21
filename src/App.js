import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPS = [
  {
    id: 1,
    expenseDate: new Date(2023, 2, 30),
    expenseTitle: "Car Insurance 1",
    price: 323.0,
  },
  {
    id: 2,
    expenseDate: new Date(2023, 6, 30),
    expenseTitle: "Car Insurance 2",
    price: 223.0,
  },
  {
    id: 3,
    expenseDate: new Date(2023, 4, 30),
    expenseTitle: "Medical Insurance",
    price: 623.0,
  },
  {
    id: 4,
    expenseDate: new Date(2022, 2, 30),
    expenseTitle: "Groceries Cost",
    price: 123.0,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPS);

  const addExpanseHandler = (expense) => {
    console.log("addExpanseHandler");

    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });


  };
  return (
    <div className="App">
      <NewExpense onAddExpanse={addExpanseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
