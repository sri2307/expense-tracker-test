import Cards from "../UI/Cards";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const dropDownChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const newArray = props.items.filter(
    (arrayItem) => arrayItem.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <li>
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onDropdownChange={dropDownChange}
        ></ExpensesFilter>
        <ExpensesChart expenses={newArray}></ExpensesChart>
        <ExpenseList items={newArray}></ExpenseList>  
      </Cards>
    </div></li>
  );
};

export default Expenses;
