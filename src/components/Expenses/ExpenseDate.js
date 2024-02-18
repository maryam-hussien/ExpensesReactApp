import "../Expenses/ExpenseDate.css";
const ExpenseDate = (props) => {
  const dateObject = new Date(props.date);

  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const day = dateObject.toLocaleString("en-US", { day: "2-digit" });
  const year = dateObject.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year ">{year}</div>
    </div>
  );
};

export default ExpenseDate;
