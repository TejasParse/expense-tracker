import React, { useContext } from "react";
import ExpensesForm from '../ExpenseForm/ExpensesForm';
import ListExpenses from '../ListExpenses/ListExpenses';
import ShowExpenses from '../ShowExpenses/ShowExpenses';
import { Row, Col } from "react-bootstrap";
import ExpensesContext from "../../context/ExpensesContext/ExpensesContext";

let ExpensesMain = (props)=>{

    let Expenses1 = useContext(ExpensesContext);

    let displayExpenses = [];
    for(let dates of props.showMonths) {
        let key1 = `${props.showYear}-${dates}`;
        let tp1 = Expenses1.Expenses[key1];
        let tp2 = [];
        if(Expenses1.Expenses.hasOwnProperty(key1)) {
            for(let i=0; i<tp1.length; i++) {
                if(props.showCategories.includes(tp1[i].category)) {
                    tp2.push(tp1[i])
                }
            }
            displayExpenses = [...displayExpenses, ...tp2]
        }
    }

    let totalCredited = 0, totalDebited = 0;

    for(let i=0; i<displayExpenses.length; i++) {
        if(displayExpenses[i].credited) {
            totalCredited+= displayExpenses[i].expense;
        } else {
            totalDebited+= displayExpenses[i].expense;
        }   
    }

    console.log("Show Year", props.showYear);
    
    console.log(displayExpenses, "idhar");

    
    return (
        <React.Fragment>
            <Row className="mb-3 me-3">
                <Col md={4} className={"rounded p-3 bg-white d-flex flex-column justify-content-around align-items-center"}>
                <p className="mb-0">Net Debited</p>
                    <p className="mb-0 fs-3"><b>{totalDebited}</b></p>
                </Col>
                <Col md={1}></Col>
                <Col md={2} className={"rounded p-3 bg-white d-flex flex-column justify-content-around align-items-center"}>
                    <p className="mb-0">Net Gain</p>
                    <p className="mb-0 fs-3"><b>{totalCredited-totalDebited}</b></p>
                </Col>
                <Col md={1}></Col>
                <Col md={4} className={"rounded p-3 bg-white d-flex flex-column justify-content-around align-items-center"}>
                <p className="mb-0">Net Credited</p>
                    <p className="mb-0 fs-3"><b>{totalCredited}</b></p>
                </Col>
            </Row>
            <ExpensesForm  />
            <ShowExpenses changeappstate = {props.changeappstate}/>
            <ListExpenses displayExpenses = {displayExpenses} />
        </React.Fragment>
    )

};

export default ExpensesMain;