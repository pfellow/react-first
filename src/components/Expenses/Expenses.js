import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const onFilterChangeHandler = (filterValue) => {
    setSelectedYear(filterValue);
  };

  let filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
