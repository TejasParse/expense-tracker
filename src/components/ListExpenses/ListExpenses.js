import { useContext, useState } from "react";
import ExpensesContext from "../../context/ExpensesContext/ExpensesContext";
import ExpenseCard from "../ExpenseCard/ExpenseCard" 

let ListExpenses = (props)=>{

    return (
        <div>
            { 
                props.displayExpenses.length!==0 && props.displayExpenses.map(elmt=>{
                    return (
                        <ExpenseCard key={elmt.uid} data={elmt} />
                    )
                })
            }
            {
                props.displayExpenses.length===0 && <h1 className="text-white">No Results Found</h1>
            }
        </div>
    )


};

export default ListExpenses;