import { Row, Col } from "react-bootstrap";

let ExpenseCard = (props)=>{

    let dateData = new Date(props.data.date);

    let monthMap = {
        "0": "Jan",
        "1": "Feb",
        "2": "Mar",
        "3": "Apr",
        "4": "May",
        "5": "Jun",
        "6": "Jul",
        "7": "Aug",
        "8": "Sep",
        "9": "Oct",
        "10": "Nov",
        "11": "Dec"
    }


    return (
        <Row className="rounded p-3 mb-3 me-3" style={{backgroundColor: "aliceblue"}}>
            <Col md={2} xl={1} className={"d-flex"}>
                <div className="d-inline-flex flex-column align-items-center text-white p-2 rounded ps-3 pe-3" style={{backgroundColor: "red"}}>
                    <h2 className="mb-0">{dateData.getDate()}</h2>
                    <p className="m-0">{monthMap[dateData.getMonth()]}</p>
                    <p className="m-0">{dateData.getFullYear()}</p>
                </div>
            </Col>
            <Col md={8} xl={9} className="d-flex flex-column justify-content-around">
                <h3>{props.data.title}</h3>
                <h5>{props.data.category}</h5>
            </Col>
            <Col md={2} xl={2} className="d-inline-flex flex-column justify-content-around">
                <h2 className="rounded bg-white p-3 text-center" style={{
                    color:  (props.data.debited) ? "red" : "green"
                }}>{props.data.expense}/-</h2>
            </Col>
        </Row>
    )

};
 
export default ExpenseCard;