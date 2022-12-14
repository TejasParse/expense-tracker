import React, { useState } from "react";
import { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext/ExpensesContext";
import { Button, Row, Container } from "react-bootstrap";
import ExpensesForm from "../ExpenseForm/ExpensesForm";

let ShowExpenses = (props)=>{

    let test = useContext(ExpensesContext);

    let [modalShow, setModalShow] = useState(false); 

    let onClickListen = (event)=> {
        console.log("Yo");
        setModalShow(true);
    };

    return (
        <React.Fragment>

            <div className="addDiv">
                <button onClick={onClickListen}>
                    <svg color="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </div>
  
            <ExpensesForm show={modalShow}
                onHide={() => setModalShow(false)} changeappstate = {props.changeappstate}/>
                
        </React.Fragment>
    )

};

export default ShowExpenses;