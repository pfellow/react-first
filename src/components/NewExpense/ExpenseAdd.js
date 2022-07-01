import "./ExpenseForm.css";

const ExpenseAdd = (props) => {
    const onChangeFormHandler = () => {
        props.onChangeForm(1);
      }

  return <button type="submit" onClick={onChangeFormHandler}>Add New Expense</button>;
};

export default ExpenseAdd;
