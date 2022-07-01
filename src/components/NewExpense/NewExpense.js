import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseAdd from "./ExpenseAdd";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formState, setFormState] = useState(0);

  const onChangeForm = (value) => {
    setFormState(value);
  }

  if (formState === 0) {
    return (
      <div className="new-expense">
        <ExpenseAdd onChangeForm={onChangeForm}  />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm onChangeForm={onChangeForm}  onSaveExpenseData={onSaveExpenseDataHandler} />
      </div>
    );
  }
};

export default NewExpense;
