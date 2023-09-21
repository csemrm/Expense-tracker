import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {

  const [title, setTitle] = useState(props.expense.expenseTitle);

  const clickEventHandler = () => {
    setTitle("Clicked");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.expense.expenseTitle} </h2>
          <div className="expense-item__price">${props.expense.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
