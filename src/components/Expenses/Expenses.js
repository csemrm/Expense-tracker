import "./Expenses.css";
import ExpansesList from "./ExpensesLIst";
import ExpensesFilter from "./ExpensesFilter";
import ExpresesChart from "./ExpresesChart";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpanses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpresesChart expenses={filteredExpanses} />
      <ExpansesList items={filteredExpanses} />
    </Card>
  );
}

export default Expenses;
