import { createContext } from "react";

let ExpensesContext = createContext({
    Expenses: {},
    categoryList: [],
    saveExpenses: ()=>{},
    addExpense: ()=>{},
    deleteExpense: ()=>{},
    addCategory: ()=>{},
    removeCategory: ()=>{}
})

export default ExpensesContext;