import React, { useState } from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ExpenseItem = (props) => {
  const [editFlag, setEditFlag] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const editFlagHandler = () => {
    setEditFlag(!editFlag);
  };

  const deleteFlagHandler = () => {
    setDeleteFlag(!deleteFlag);
  
    deleteExpenseHandler(props.id);
  };

  const deleteExpenseHandler = (id) => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    const updatedExpenses = storedExpenses.filter(
      (expense) => expense.id !== id
    );
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    console.log(updatedExpenses);

    console.log("deleted");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <div className="expense-item__btns">
            <button onClick={editFlagHandler}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              onClick={() => {
                deleteFlagHandler();
                deleteExpenseHandler(props.id);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
