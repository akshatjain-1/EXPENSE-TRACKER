import React from "react"
import {Chart as ChartJs,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
     ArcElement,
 } from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from "styled-components"
import { useGlobalContext} from '../../context/globalContext'
import { dateFormat } from '../../Utils/dateFormat'

 ChartJs.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
     ArcElement,
 )


function Chart() {

    const {Incomes, Expenses} = useGlobalContext()

    const data = {
        labels: Incomes.map((inc) => {
            const {date} = inc
            return dateFormat(date)
        }),

        datasets: [
            {
                label: 'Income',
                data : [
                    ...Incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension : .5
            },



            {
                label: 'Expense',
                data : [
                    ...Expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension : .5
            }

        ]
    }
    return (
        <ChartStyled>
            <Line data={data}/>
        </ChartStyled>
    )
}


const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;

`;

export default Chart