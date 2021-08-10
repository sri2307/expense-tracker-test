import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";


const ExpenseItem = (props) => {
  const title=props.title;
  const amount=props.amount;
  const date=props.date;
  
  return (
    <Cards className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      
    </Cards>
  );
};

export default ExpenseItem;
