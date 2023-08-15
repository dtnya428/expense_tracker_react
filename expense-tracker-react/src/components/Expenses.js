import ExpenseItem from "./expenseItem";

function Expenses(expenses) {

    return (
        <div className="expenses">
            <ExpenseItem expenses={expenses.expenses[0]}></ExpenseItem>
            <ExpenseItem expenses={expenses.expenses[1]}></ExpenseItem>
            <ExpenseItem expenses={expenses.expenses[2]}></ExpenseItem>
        </div>
    );
}

export default Expenses;