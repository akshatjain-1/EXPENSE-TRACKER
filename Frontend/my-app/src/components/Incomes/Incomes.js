import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Income(){
    const {addIncome, Incomes, getIncomes} = useGlobalContext()

    useEffect(() => {
        getIncomes()
    },[])
    return (
        <IncomeStyled> 
            <InnerLayout>
                <h1> Incomes</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form/>
                    </div>
                    <div className="income">
                        {Incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                        })}
                    </div>
                </div>
            
            </InnerLayout>
         </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income