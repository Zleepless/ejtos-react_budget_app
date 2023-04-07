import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const setBudget = (val) => {
        dispatch({
          type: 'SET_BUDGET',
          payload: val,
        })
      }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
              required="required"
              type="number"
              value={budget}
              style={{ marginLeft: '0rem', size: 10 }}
              onChange={(event) => setBudget(event.target.value)}
            ></input>
        </div>
    );
};
export default Budget;