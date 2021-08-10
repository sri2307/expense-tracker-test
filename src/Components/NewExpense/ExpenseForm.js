import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  
  const [inputTitle, newInputTitle] = useState("");
  const [inputAmount, newInputAmount] = useState("");
  const [inputDate, newInputDate] = useState("");

  const titleChangehandler = (event) => {
    newInputTitle(event.target.value);
  };
  const amountChangehandler = (event) => {
    newInputAmount(event.target.value);
  };

  const dateChangehandler = (event) => {
    newInputDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    
    newInputTitle('');
    newInputAmount('');
    newInputDate('');
    
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text" value={inputTitle}
            className="new-expense__control input"
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01" value={inputAmount}
            className="new-expense__control input" onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            className="new-expense__control input" onChange={dateChangehandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
          
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
