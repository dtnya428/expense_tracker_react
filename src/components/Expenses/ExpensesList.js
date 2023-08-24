import ExpenseItem from "./expenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    let expenseContent = '';
    if (props.items.length > 0) {
        expenseContent = props.items.map((expense) =>
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            />
        )
    } else {
        expenseContent = <h2 className="expenses-list__fallback ">Found no expenses</h2>
    }

    return <ul className="expenses-list">
        {expenseContent}
    </ul>

}

export default ExpensesList;