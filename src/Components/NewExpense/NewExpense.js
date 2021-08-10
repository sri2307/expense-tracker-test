import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from "react"


const NewExpense=(props)=>{

  const [isEditing,setEditing]=useState(false);

  const saveExpenseDataHandler=(formExpenseData)=>{
    props.onNewExpenseData(formExpenseData);
    setEditing(false);

  };

  const enableEditingHandler=()=>{
    setEditing(true);
  }
  const disableEditingHandler=()=>{
    setEditing(false);
  }

  return <div className="new-expense">
    {!isEditing && <button onClick={enableEditingHandler}>Add Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={disableEditingHandler}></ExpenseForm>}
    </div>
}

export default NewExpense;