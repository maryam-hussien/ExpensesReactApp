import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [IsEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      _id: Math.random().toString(),
    };
    console.log(ExpenseData);
    props.onAddExpense(ExpenseData);
    setIsEditing(false)
  };
  const IsEditingHandler = () => {
    setIsEditing(true);
  };
  const StopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!IsEditing && (
        <button onClick={IsEditingHandler}>Add New Expense</button>
      )}
      {IsEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          edit={StopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
