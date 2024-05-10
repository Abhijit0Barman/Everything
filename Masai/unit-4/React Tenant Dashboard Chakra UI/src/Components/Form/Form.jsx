import { useState, useEffect } from "react"
import { Stack, Button, Checkbox, FormControl, FormLabel, Input, isChecked } from '@chakra-ui/react'
import axios from "axios"

const initial = {
	name: "",
	ownerName: "",
	address: "",
	areaCode: "",
	rent: "",
	isBachelorAllowed: false,
	isMarriedAllowed: false,
}

export default function Form() {
	const [formData, setFormData] = useState(initial)
	// TODO: Remove below const and instead import them from chakra
	// const Button = () => <div />;
	// const Checkbox = () => <div />;
	// const FormControl = () => <div />;
	// const FormLabel = () => <div />;
	// const Input = () => <div />;

	const handleChange = (e) => {
		let { name, value } = e.target
		if (e.target.type === "number") {
			value = +value
		}
		if (e.target.type === "checkbox") {
			value = e.target.checked
		}
		setFormData({ ...formData, [name]: value })
		console.log(e.target);

	}


	const handleSubmit = (e) => {
		e.preventDefault()
		// Send a POST request
		axios({
			method: 'post',
			url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,
			data: formData
		})

		setFormData({
			...initial, isBachelorAllowed: false,
			isMarriedAllowed: false,
		})
	}


	const { name, ownerName, address, areaCode, rent, isBachelorAllowed, isMarriedAllowed } = formData

	console.log(formData);
	return (
		<div className="addHouseContainer">
			<form className="form" onSubmit={handleSubmit}>
				<FormControl>
					<Stack spacing={3}>
						<Input
							focusBorderColor={"lime"}
							className="name"
							placeholder="Name"
							value={name}
							onChange={handleChange}
							name="name"
							type="text"

						/>
						<Input
							focusBorderColor={"lime"}
							className="ownerName"
							placeholder="Owners name"
							value={ownerName}
							onChange={handleChange}
							name="ownerName"
							type="text"
						/>
						<Input
							focusBorderColor={"lime"}
							className="address"
							placeholder="Address"
							value={address}
							onChange={handleChange}
							name="address"
							type="text"
						/>
						<Input
							focusBorderColor={"lime"}
							className="areaCode"
							placeholder="Area code"
							value={areaCode}
							onChange={handleChange}
							name="areaCode"
							type="text"
						/>
						<Input
							focusBorderColor={"lime"}
							className="rent"
							placeholder="Rent"
							type="number"
							value={rent}
							onChange={handleChange}
							name="rent"
						/>
						<Checkbox colorScheme={"green"} className="married"
							// isChecked={isMarriedAllowed}
							// value={isMarriedAllowed}
							onChange={handleChange}
							name="isMarriedAllowed"
							type="checkbox"

							isChecked={isMarriedAllowed}
							// isIndeterminate={isIndeterminate}
							// onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
						>
							<FormLabel>Married Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Checkbox colorScheme={"green"} className="bachelor"
							// value={isBachelorAllowed}
							isChecked={isBachelorAllowed}
							onChange={handleChange}
							name="isBachelorAllowed"
							type="checkbox"
						>
							<FormLabel>Bachelor Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Button colorScheme={"green"} className="submitBtn" type="submit">
							Submit
						</Button>
					</Stack>
				</FormControl>
			</form>
		</div>
	);
}
