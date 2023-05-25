import "./Donors.css";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

//components
import Card from "../../components/Card/Card";

//icons
import { IoSearchCircle } from "react-icons/io5";

const Donors = () => {
	const [donorsData, setDonorsData] = useState([]);
	const [search, setSearch] = useState();

	const dataGet = () => {
		axios
			.get("https://64327f7e3e05ff8b372763d3.mockapi.io/donors")
			.then((res) => {
				setDonorsData(res.data);
			});
	};

	useEffect(() => {
		dataGet();
	}, []);

	return (
		<section className="donors-div">
			<section className="donors-header-div">
				<div className="search-div">
					<input
						type="search"
						placeholder="Search Blood Group..."
						className="search-bar"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<IoSearchCircle className="search-icon" size="1.5rem" />
				</div>

				<div className="filter-div">
					<label htmlFor="blood_groups">Filters: &nbsp;</label>
					<select
						className="filter-dropdown"
						name="blood_groups"
						onChange={(e) => setSearch(e.target.value)}>
						<option value="">Blood Group</option>
						<option value="O+">O+</option>
						<option value="O-">O-</option>
						<option value="A+">A+</option>
						<option value="A-">A-</option>
						<option value="B+">B+</option>
						<option value="B-">B-</option>
						<option value="AB+">AB+</option>
						<option value="AB-">AB-</option>
					</select>
				</div>
			</section>

			<motion.section className="card-container" layout>
				{search
					? donorsData
							.filter(({ b_group }) =>
								b_group.toLowerCase().includes(search.toLowerCase())
							)
							.map((value) => <Card data={value} key={value.id} />)
					: donorsData.map((data) => <Card data={data} key={data.id} />)}
			</motion.section>
		</section>
	);
};

export default Donors;
