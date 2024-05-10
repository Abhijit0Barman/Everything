import React, { useReducer, useEffect, useState } from "react";
import { Button, Stack, Center, Input, Table, TableContainer, Tbody, Thead, Td, Th, Tr, Spinner } from '@chakra-ui/react'
import { initialState } from "./initialState"
import { reducer } from "./reducer"
import axios from "axios";

// const initialState = {
// 	data: [],
// 	isLoading: false,
// 	isError: false,
// };

export default function Dashboard() {
	// TODO: Remove below const and instead import them from chakra UI
	// const Button = () => <div />;
	// const Stack = () => <div />;
	// const Center = () => <div />;
	// const Input = () => <div />;
	// const Table = () => <div />;
	// const TableContainer = () => <div />;
	// const Tbody = () => <div />;
	// const Thead = () => <div />;
	// const Td = () => <div />;
	// const Th = () => <div />;
	// const Tr = () => <div />;
	const [state, dispatch] = useReducer(reducer, initialState)
	const [search, setSearch] = useState("")
	const [sortType, setSortType] = useState("rent")
	const [sortOrder, setSortOrder] = useState("")

	const getAxios = (search, sortOrder, sortType) => {
		const obj = {}
		if (sortOrder && sortType) {
			obj._sort = sortType
			obj._order = sortOrder
		}
		if (search) {
			obj.q = search
		}

		return axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`, {
			params: obj
		})
	}

	const fetchData = (search, sortOrder, sortType) => {
		dispatch({ type: "GET_HOUSE_DETAILS_REQUEST" })
		getAxios(search, sortOrder, sortType)
			.then(res => {
				dispatch({ type: "GET_HOUSE_DETAILS_SUCCESS", payload: res.data })
				// console.log(res?.data);
			})
			.catch(() => {
				dispatch({ type: "GET_HOUSE_DETAILS_FAILURE" })
			})
	}

	useEffect(() => {
		fetchData(search, sortOrder, sortType)
	}, [search, sortOrder, sortType])


	const handleDelete = (id) => {
		axios({
			method: "delete",
			url: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
		})
			.then((res) => {
				fetchData(search, sortOrder, sortType)
			})
			.catch(err => console.log(err))
	}

	if (state.isLoading) {
		return <Spinner
			thickness='4px'
			speed='0.65s'
			emptyColor='gray.200'
			color='blue.500'
			size='xl'
		/>
	}

	// console.log('state=>',state?.data[0]?.name);
	console.log(state);
	return (
		<div>
			<Stack spacing={5}>
				<div className="sortingButtons">
					<Button
						className="sortByRentAsc"
						onClick={() => setSortOrder("asc")}
					>
						Sort by Asc
					</Button>

					<Button
						colorScheme={"red"}
						className="sortByRentDesc"
						onClick={() => setSortOrder("desc")}
					>
						Sort by Desc
					</Button>
				</div>

				<Center>
					<Input
						width="300px"
						focusBorderColor={"lime"}
						className="searchAddress"
						placeholder="Search Data"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</Center>

				<Center>
					<TableContainer>
						<Table
							variant="striped"
							p={3}
							className="table"
							colorScheme={"cyan"}
						>
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Owner's Name</Th>
									<Th>Address</Th>
									<Th>Area Code</Th>
									<Th>Rent</Th>
									<Th>Bachelor Tenants Allowed</Th>
									<Th>Married Tenants Allowed</Th>
								</Tr>
							</Thead>
							<Tbody>
								{
									state?.data?.map((item) => (
										<Tr className="houseDetails" key={item.id}>
											<Td className="name">{item.name}</Td>
											<Td className="ownersName">{item.ownerName}</Td>
											<Td className="address">{item.address}</Td>
											<Td className="areaCode">{item.areaCode}</Td>
											<Td className="rent">{item.rent}</Td>
											<Td className="isBachelorAllowed">{item.isBachelorAllowed ? "Yes" : "No"}</Td>
											<Td className="isMarriedAllowed">{item.isMarriedAllowed ? "Yes" : "No"}</Td>
											<Td onClick={() => handleDelete(item.id)} className="delete">Delete</Td>
										</Tr>
									))
								}
							</Tbody>
						</Table>
					</TableContainer>
				</Center>
			</Stack>
		</div>
	);
}
