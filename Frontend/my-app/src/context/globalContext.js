import React, { useContext, useState } from "react"
import axios from 'axios'
import { expenses } from "../Utils/Icons"

const BASE_URL = " http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [Incomes, setIncomes] = useState([])
    const [Expenses, setExpenses ] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncomes()

        

    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        Incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome ;
    }


    //calculate expense

    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getExpenses()

    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpense = () => {
        let totalIncome = 0;
        Expenses.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome ;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }
    

    const transactionHistory = () => {
        const history = [...Incomes, ...Expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }



    return(
        <GlobalContext.Provider value ={{
            addIncome,
            getIncomes,
            Incomes,
            Expenses,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}