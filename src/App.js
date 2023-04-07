import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import Currency from './components/Currency';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {/*Budget*/}
                    <div className='col-sm'>
                        <Budget />
                    </div>  

                    {/*Remaining*/}
                    <div className='col-sm'>
                        <Remaining />
                    </div>

                    {/*ExpenseTotal*/}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>    

                    {/*Currency*/}
                    <div className='col-sm'>
                        <Currency />
                    </div>        
                    
                    <h3 className='mt-3'>Allocation</h3>
                    {/*ExpenseList*/}
                    <div className='row '>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>

                    <h3 className='mt-3'>Change allocation</h3>
                    {/*AllocationForm*/}
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm/>
                        </div>
                    </div>     

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
