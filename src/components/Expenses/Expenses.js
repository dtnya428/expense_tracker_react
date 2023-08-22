import { useState } from 'react';
import ExpenseItem from "./expenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {

    const [filteredYear, setSelectedFilter] = useState('2020');

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const applySelectedFilterHandler = (selectedYear) => {
        setSelectedFilter(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onSelectFilter={applySelectedFilterHandler} selected={filteredYear} />
            {filteredExpenses.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            )}
        </Card>
    );
}

export default Expenses;