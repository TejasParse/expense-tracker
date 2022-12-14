import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ExpensesContext from "../../context/ExpensesContext/ExpensesContext";
import "./Filters.css"

let Filters = (props) => {

    let Expenses1 = useContext(ExpensesContext);
    let inputRef = useRef();
    let monthsRef = useRef();
    let categoriesRef = useRef();

    let monthsList = [
        ["January", 0],
        ["February", 1],
        ["March", 2],
        ["April", 3],
        ["May", 4],
        ["June", 5],
        ["July", 6],
        ["August", 7],
        ["September", 8],
        ["October", 9],
        ["November", 10],
        ["December", 11]
    ];

    
    let currentMonth = (new Date()).getMonth();
    
    let showMonths = [currentMonth];

    let changeShowMonths = ()=>{
        let tp1 = [];
        for(let temp of monthsRef.current.childNodes) {
            if(temp.childNodes[0].checked) {
                tp1.push(parseInt(temp.childNodes[0].id));
            }
        }
        showMonths = tp1;
        console.log(showMonths);
        props.changeShowList(showMonths, showCategories);


    };  

    let showCategories = [...Expenses1.categoryList];
    
    let changeShowCategories = ()=>{
        let tp1 = [];
        for(let temp of categoriesRef.current.childNodes) {
            if(temp.childNodes[0].checked) {
                tp1.push(temp.childNodes[0].id);
            }
        }

        showCategories = tp1;
        console.log(showCategories);
        props.changeShowList(showMonths, showCategories);

        
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let addCategoryListen = () => {
        if (inputRef.current.value.trim().length == 0) {
            console.log("here");
            return;
        }
        setShow(false);

        Expenses1.addCategory(inputRef.current.value);
    };
    
    let getYears = [];

    for(let tp1 in Expenses1.Expenses) {
        let newYear = "";
        for(let j=0; j<tp1.length; j++) {
            if(tp1[j]=="-") {
                break;
            }
            newYear += tp1[j];
        }
        getYears.push(newYear);
    }

    getYears.sort();

    let [showYear, changeShowYear] = useState(getYears[0]);

    let changeShowYearInput = (event)=>{
        props.newYearShow(event.target.value)
    };

    return (
        <Container fluid className="mb-4">
            
            <Container fluid className="mt-4 rounded p-2 filter-box">
                    <h4>Choose Year</h4>
                    <select onChange={changeShowYearInput} defaultValue={showYear} className="form-select" aria-label="Default select example">
                        {
                            getYears.map(elmt=>{
                                    return (
                                        <option 
                                            value={`${elmt}`}
                                            key={elmt}
                                        >{elmt}</option>
                                    )
                            })
                        }
                    </select>
            </Container>
            <Container fluid className="mt-4 rounded p-2 filter-box">
                    <h4>Months</h4>
                    <div id="monthsList" ref={monthsRef}>
                        {
                            monthsList.map(elmt=>{
                                return (
                                    <Form.Check
                                        type={"checkbox"}
                                        id={`${elmt[1]}`}
                                        label={`${elmt[0]}`}
                                        defaultChecked={ currentMonth == elmt[1] }
                                        className={"m-2"}
                                        key={elmt[0]}
                                        onClick={changeShowMonths}
                                    />
                                )
                            })
                        }
                    </div>
            </Container>

            <Container fluid id="Categories" className="mt-4 rounded p-2 filter-box">
                    <h4>Categories</h4>
                    <Container fluid id="categoriesShow" ref={categoriesRef}>
                        {Expenses1.categoryList.map(elmt => {
                            return (
                                <Form.Check
                                    type={"checkbox"}
                                    id={`${elmt}`}
                                    label={`${elmt}`}
                                    defaultChecked={true}
                                    className={"m-2"}
                                    key={elmt}
                                    onClick={changeShowCategories}
                                />
                            )
                        })}
                    </Container>
                    <Button onClick={handleShow}>Add</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-2 form-floating">
                                <input type={"text"} id="addCategoryInput" name="addCategoryInput" placeholder="yoy" className="form-control" ref={inputRef} />
                                <label htmlFor="addCategoryInput">Enter your Category</label>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={addCategoryListen}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </Container>
                
    
        </Container>
    )

};

export default Filters;