import { useState } from "react";
import ExpensesContext from "./ExpensesContext";

let ExpensesProvider = (props) => {

    let [ExpensesList, changeExpensesList] = useState(JSON.parse(localStorage.getItem("EXPENSES")));
    let [CategoryList, changeCategoryList] = useState(JSON.parse(localStorage.getItem("CATEGORIES")));
    console.log("Categories: ", CategoryList);

    if(CategoryList == null || CategoryList == "") {
        changeCategoryList(["Essentials", "Luxury"]);
    }


    if(ExpensesList == "" || ExpensesList == null) {
        changeExpensesList({});
    }

    let saveExpenses = ()=>{
        localStorage.setItem("EXPENSES", JSON.stringify(ExpensesList));
    }

    let addExpenses = (data)=>{
        if(!ExpensesList.hasOwnProperty(data.key1)) {
            changeExpensesList(prev=>{

                let newOne = prev;
                newOne[data.key1] = [data];
                localStorage.setItem("EXPENSES", JSON.stringify(newOne));
                return newOne;

            });
        } else {
            changeExpensesList(prev=>{
    
                let newOne = prev;
                newOne[data.key1].push(data);

                localStorage.setItem("EXPENSES", JSON.stringify(newOne));

                return newOne;
    
            });
        }
    }

    let addCategory = (newCat) => {

        changeCategoryList(prev=>{
            localStorage.setItem("CATEGORIES", JSON.stringify([...prev, newCat]));
            return [...prev, newCat];
        })
    }

    return (
        <ExpensesContext.Provider value={{
            Expenses: ExpensesList,
            addExpense: addExpenses,
            saveExpenses: saveExpenses,
            categoryList: CategoryList,
            addCategory: addCategory
        }}>
            {props.children}
        </ExpensesContext.Provider>
    )

};

export default ExpensesProvider;