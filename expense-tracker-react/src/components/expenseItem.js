import './expenseItem.css';
import ExpenseDate from './ExpenseDate';

function expenseItem(expenses) {
    return (
        <div className="expense-item">
            {/* Date Component */}
            <ExpenseDate date={expenses.expenses.date} />
            <div className='expense-item__description'>
                <h2>{expenses.expenses.title}</h2>
                <div className='expense-item__price'>$ {expenses.expenses.amount}</div>
            </div>
        </div>
    );
}

export default expenseItem;