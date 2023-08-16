import ExpenseItem from "./expenseItem";
import Card from "../UI/Card";

function Expenses(expenses) {

    return (
        <Card className="expenses">
            <ExpenseItem expenses={expenses.expenses[0]}></ExpenseItem>
            <ExpenseItem expenses={expenses.expenses[1]}></ExpenseItem>
            <ExpenseItem expenses={expenses.expenses[2]}></ExpenseItem>
        </Card>
    );
}

export default Expenses;