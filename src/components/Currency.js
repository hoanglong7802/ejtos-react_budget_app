import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {currency, setCurrency  } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    return (
        <div className='alert alert-primary'>
            <span>Currency: </span>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;