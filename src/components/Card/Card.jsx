import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

const Card = ({ data }) => {
	return (
		<motion.div className="card" layout>
			<div className="card-donor-details">
				<h3>{data.name}</h3>
				<p>Age: {data.age}</p>
				<p>Gender: {data.gender}</p>
				<p>Blood group: {data["b_group"]}</p>
			</div>

			<div className="card-btn-div">
				<button className="card-btn">
					<a className="card-btn-links" href={`tel:${data["ph_no"]}`}>
						Call
					</a>
				</button>
				<button className="card-btn">
					<a className="card-btn-links" href={`mailto:${data.mail}`}>
						Mail
					</a>
				</button>
			</div>
		</motion.div>
	);
};

export default Card;
