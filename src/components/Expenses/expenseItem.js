import './expenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function expenseItem(expenses) {
    return (
        <Card className="expense-item">
            {/* Date Component */}
            <ExpenseDate date={expenses.expenses.date} />
            <div className='expense-item__description'>
                <h2>{expenses.expenses.title}</h2>
                <div className='expense-item__price'>$ {expenses.expenses.amount}</div>
            </div>
        </Card>
    );
}

export default expenseItem;