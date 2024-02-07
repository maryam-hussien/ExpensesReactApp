import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredInfoText, setFilteredInfoText] = useState(
    "2019 , 2021 and 2022"
  );
  const filteredExpense = props.data.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  const FilterChangeHandler = (expense) => {
    setFilteredYear(expense);
    if (expense === "2021") {
      setFilteredInfoText("2019 , 2020 and 2022");
    } else if (expense === "2022") {
      setFilteredInfoText("2019 , 2020 and 2021");
    } else if (expense === "2019") {
      setFilteredInfoText("2020 , 2021 and 2022");
    } else {
      setFilteredInfoText("2019 , 2021 and 2022");
    }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={FilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense} />

        {/* <p>data for years {filteredInfoText} is hidden</p>
        {filteredExpense.length === 0 ? (
          <p>no expenses found </p>
        ) : (
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
