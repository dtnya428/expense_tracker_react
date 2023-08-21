import { useState } from 'react';
import ExpenseItem from "./expenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(expenses) {

    const [filteredYear, setSelectedFilter] = useState('2020');

    const applySelectedFilterHandler = (selectedYear) => {
        setSelectedFilter(selectedYear);
        console.log(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectFilter={applySelectedFilterHandler} selected={filteredYear} />
            <ExpenseItem date={expenses.expenses[0].date} title={expenses.expenses[0].title} amount={expenses.expenses[0].amount}></ExpenseItem>
            <ExpenseItem date={expenses.expenses[1].date} title={expenses.expenses[1].title} amount={expenses.expenses[1].amount}></ExpenseItem>
            <ExpenseItem date={expenses.expenses[2].date} title={expenses.expenses[2].title} amount={expenses.expenses[2].amount}></ExpenseItem>
            <ExpenseItem date={expenses.expenses[3].date} title={expenses.expenses[3].title} amount={expenses.expenses[3].amount}></ExpenseItem>
        </Card>
    );
}

export default Expenses;