import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";
const ExpensesList = (props) => {

  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">No expenses found</h2>
  }

  return (
    <ul className="expenses-list">
    { props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )
};

export default ExpensesList;
