import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import ExpensesProvider from './context/ExpensesContext/ExpensesProvider';
import "./app.css"
import ExpensesContext from './context/ExpensesContext/ExpensesContext';
import Filters from './components/Filters/Filters';
import ExpensesMain from './components/ExpensesMain/ExpensesMain';

function App() {
	let Expenses1 = useContext(ExpensesContext);

	let currentMonth = (new Date()).getMonth();

	let [showM, changeShowM] = useState([currentMonth]);

	let [showCategories, changeShowCategories] = useState([...Expenses1.categoryList]);

	let changeList = (currM, showM) => {
		changeShowM(currM);
		changeShowCategories(showM);
	}

	let getYears = [];

	for (let tp1 in Expenses1.Expenses) {
		let newYear = "";
		for (let j = 0; j < tp1.length; j++) {
			if (tp1[j] == "-") {
				break;
			}
			newYear += tp1[j];
		}
		getYears.push(newYear);
	}

	getYears.sort();


	let [showYear, changeShowYear] = useState((new Date()).getFullYear());

	let newYearShow = (newYear) => {
		changeShowYear(newYear);
	}

	let [StateApp, changeStateApp] = useState(1);

	let changeappstate = ()=>{
		changeStateApp(prev=>{
			return prev^1;
		})
	}

	return (
		<React.Fragment>
			<CustomNavbar />
			<Container fluid>

				<Row>
					<Col sm={2}>
						<Filters changeShowList={changeList} newYearShow={newYearShow} />
					</Col>
					<Col sm={10} className="mt-4">
						<ExpensesMain changeappstate = {changeappstate} showYear={showYear} showMonths={showM} showCategories={showCategories} />
					</Col>
				</Row>

			</Container>
		</React.Fragment>
	);
}

export default App;
