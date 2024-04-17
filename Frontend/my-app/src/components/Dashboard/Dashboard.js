import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import Chart from '../Chart/Chart';
import { dollar } from '../../Utils/Icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/history.js';
import Income from '../Incomes/Incomes.js';

function Dashboard(){
    const {totalIncome,totalExpense, totalBalance, getIncomes, getExpenses, Incomes, Expenses} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    return (
        <DashboardStyled>
            <InnerLayout>
                <h2 className='heading-tans'>All Transactions</h2>
                <div className='stats-con'>
                    <div className='chart-con'>
                        <Chart/>
                        <div className='amount-con'>
                            <div className='income'>
                                <h2>Total Income</h2>
                                <p>
                                    {dollar}{totalIncome()}
                                </p>
                            </div>
                            <div className='expense'>
                                <h2> Total Expense</h2>

                                    <p>
                                        {dollar}{totalExpense()}
                                    </p>
                            </div>
                            <div className='balance'>
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar}{totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='history-con'>
                        <History/>
                        <h2 className='salary-title'> Min <span className='min-title'> Salary </span> Max </h2>
                        <div className='salary-item'>
                            <p>
                                ${Math.min(...Incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...Incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className='salary-title'>Min <span className='min-title'>Expense </span>Max</h2>
                        <div className='salary-item'>
                            <p>
                                ${Math.min(...Expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...Expenses.map(item => item.amount))}
                            </p>
                        </div>
                    
                    </div>
                </div>
            </InnerLayout> 
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .heading-tans{
        font-size: 1.5rem;
    }
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        margin-top:0.5rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 55%;
            width:100%;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
                margin-top: 0.5rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 15px;
                    padding: 0.75rem;
                    p{
                        font-size: 1.5rem;
                        font-weight: 700;
                    }
                    h2{
                        font-size: 1.25rem;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h2{
                        font-size: 1.25rem;
                    }
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 1.75rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 0.5rem 0;
                display: flex;
                font-size: 1.25rem;
                align-items: center;
                justify-content: space-between;
            }
            
            .salary-title{
                font-size: 0.75rem;
                span{
                    font-size: 1rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 0.75rem;
                }
            }
        }
    }
`;

export default Dashboard