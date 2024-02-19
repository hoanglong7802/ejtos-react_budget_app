import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value < totalSpending) {
            alert("Can't reduce budget lower than spending");
            return ;
        };
        if (event.target.value <= 20000) {
            setNewBudget(event.target.value);
        } else {
            alert("Budget cannot exceed ", currency,"20,000");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <span>{currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}> 
            </input>
        </div>
    );
};
export default Budget