import React, { useRef } from 'react'

const IncomeForm = ({ income, setIncome }) => {
	const desc = useRef(null);
	const price = useRef(null);
	const date = useRef(null);

	const addIncome = (e) => {
		e.preventDefault();

		setIncome([...income, {
			"desc": desc.current.value || "",
			"price": price.current.value || 0,
			"date": date.current.value || new Date()
		}]);

		desc.current.value = "";
		price.current.value = null;
		date.current.value = null;
	}

	return (
		<form className="income-form" onSubmit={addIncome}>
			<div className="form-inner">
				<input ref={desc} type="text" name="desc" id="desc" placeholder="Transaction description" />
				<input ref={price} type="number" name="price" id="price" placeholder="Value" />
				<input ref={date} type="date" name="date" id="date" placeholder="Transaction date" />
				<input type="submit" value="Add" />
			</div>
		</form>
	)
}

export default IncomeForm
