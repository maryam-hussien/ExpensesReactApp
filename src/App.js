import { useEffect, useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const [expenses, setExpenses] = useState(storedExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExp) => [expense, ...prevExp]);
  };
  useEffect(() => {
    // Update local storage when expenses change
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
