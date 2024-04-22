import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalContext";

import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  const { addIncome, Expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1 className="Expenses-heading"> Expenses</h1>
        <h2 className="total-income">
          {" "}
          Total Expense: <span> ${totalExpense()} </span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {Expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="red"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  flex-direction: column;
  .Expenses-heading {
    font-size: 2rem;
  }
  .total-income {
    display: flex;
    justify-content: center;

    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    padding: 0.25rem;
    margin: 1rem 0;
    font-size: 1.75rem;
    gap: 0.5rem;
    span {
      font-size: 1.5rem;
      font-weight: 800;
      color: red;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    font-size: 0.8rem;
    .incomes {
        flex: 1;
        max-height: 360px; /* Adjust the max height as needed */
        overflow: auto;
        padding: 1rem;
    }
  }
`;

export default Expenses;
