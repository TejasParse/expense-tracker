import { useContext, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ExpensesContext from "../../context/ExpensesContext/ExpensesContext";
import "./ExpensesForm.css";
import ReactDOM from "react-dom";

let ExpensesForm = (props) => {
  let Expenses = useContext(ExpensesContext);

  let titleRef = useRef();
  let expenseRef = useRef();
  let dateRef = useRef();
  let catRef = useRef();
  let debitRef = useRef();
  let creditRef = useRef();

  let validateAndSubmit = (event)=>{

    console.log(creditRef.current.checked);
    console.log(debitRef.current.checked);

    if(catRef.current.value === "none") {
      return;
    }
    if(dateRef.current.value.trim().length === 0) {
      return;
    }
    if(titleRef.current.value.trim().length === 0) {
      console.log("0");
      return;
    }
    if(expenseRef.current.value.trim().length === 0) {
      console.log("0");
      return;
    }

    let newDate = new Date(dateRef.current.value);

    let NewData = {
      uid: Date.now(),
      date: newDate,
      key1: `${newDate.getFullYear()}-${newDate.getMonth()}`,
      title: titleRef.current.value.trim(),
      expense: parseInt(expenseRef.current.value),
      credited: creditRef.current.checked,
      debited: debitRef.current.checked,
      category: catRef.current.value
    }

    Expenses.addExpense(NewData);
    console.log(props);
    props.changeappstate();
    props.onHide();

  };

  return ReactDOM.createPortal(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Expense
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3 form-floating">
            <input
              ref={titleRef}
              type={"text"}
              id="title"
              name="title"
              className="form-control"
              placeholder="enter your title"
            />
            <label htmlFor="title">Expense Title</label>
          </div>
          <div className="mb-3 form-floating">
            <input type={"date"} name="date" id="date" ref={dateRef} />
          </div>
          <div className="mb-3">
            <Form.Select aria-label="Default select example" ref={catRef}>
              <option value="none" defaultChecked={true}>Select a Category</option>
              {Expenses.categoryList.map(elmt=>{
                return (
                  <option value={elmt} key={elmt}> {elmt} </option>
                )
                })}
            </Form.Select>
          </div>
          <div className="mb-3 form-floating">
            <input
              type={"number"}
              id="expense"
              name="expense"
              className="form-control"
              placeholder="enter your expense"
              ref={expenseRef}
            />
            <label htmlFor="expense">Expense Cost</label>
          </div>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Debited"
              name="type"
              value={"debited"}
              type={"radio"}
              id={`inline-radio-2`}
              defaultChecked={true}
              ref={debitRef}
            />
            <Form.Check
              inline
              label="Credited"
              name="type"
              value={"credited"}
              type={"radio"}
              id={`inline-radio-1`}
              ref={creditRef}
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={validateAndSubmit}>
          Save
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>,
    document.querySelector("#modals")
  );
};

export default ExpensesForm;
