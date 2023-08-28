import { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
            <ExpensesFilter
                onSelectFilter={applySelectedFilterHandler}
                selected={filteredYear}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;