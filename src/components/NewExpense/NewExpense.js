import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isAddingExpense, setIsAddingNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
    };

    const addNewExpenseHandler = () => {
        setIsAddingNewExpense(true);
    }

    const cancelAddingNewExpenseHandler = () => {
        setIsAddingNewExpense(false);
    }

    let runExpenseForm = '';

    if (!isAddingExpense) {
        runExpenseForm = <button onClick={addNewExpenseHandler}>Add New Expense</button>
    } else {
        runExpenseForm = <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelAddingNewExpenseHandler}
        />
    }

    return (
        <div className='new-expense'>
            {runExpenseForm}
        </div>
    );

};

export default NewExpense;