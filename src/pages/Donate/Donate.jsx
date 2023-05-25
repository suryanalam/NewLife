import React from "react";
import "./Donate.css";

//images
import img from "./form_img.png";

//External Libraries
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Donate = () => {
	const formValidationSchema = yup.object({
		name: yup
			.string()
			.matches(/^[a-zA-Z0-9]{3,}$/, "*Enter a valid name")
			.required(),
		age: yup.number().min(18).max(50).required(),
		gender: yup.string().required("*Select a gender"),
		b_group: yup.string().required("*Select a blood group"),
		mob_no: yup.string().min(10, "*Enter a valid number").required(),
		mail: yup
			.string()
			.matches(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, "*Enter a valid email")
			.required(),
		comments: yup.string().max(150, "*Only 150 words are allowed"),
		agree: yup
			.array()
			.min(1, "*Agree to terms and conditions to submit")
			.required(),
	});

	const dataPost = ({ name, age, gender, b_group, mob_no, mail }) => {
		axios.post("https://64327f7e3e05ff8b372763d3.mockapi.io/donors", {
			name: name,
			age: age,
			gender: gender,
			b_group: b_group,
			phn_no: mob_no,
			mail: mail,
		});
	};

	return (
		<section className="donate-div">
			<div className="donate-left-div">
				<Formik
					className="donate-form-div"
					validationSchema={formValidationSchema}
					initialValues={{
						name: "",
						age: "",
						gender: "",
						b_group: "",
						mob_no: "",
						mail: "",
						comments: "",
						agree: "",
					}}
					onSubmit={(values, { resetForm }) => {
						dataPost(values);
						console.log(values);
						resetForm({ values: "" });
					}}>
					<Form className="donate-form">
						<div className="form-heading">
							<h3>Donate Form</h3>
						</div>

						<div className="form-body">
							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="name" className="input-labels">
									Full Name:
								</label>
								&nbsp;
								<section>
									<Field type="text" name="name" className="field-inputs" />
									<br></br>
									<ErrorMessage name="name" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="age" className="input-labels">
									Age:
								</label>
								&nbsp;
								<section>
									<Field type="number" name="age" className="field-inputs" />
									<br></br>
									<ErrorMessage name="age" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="gender" className="input-labels">
									Gender:
								</label>
								&nbsp;
								<section className="field-non-text-inputs">
									<div className="radio-buttons-div">
										<Field type="radio" name="gender" value="Male" />
										&nbsp;
										<label className="radio-btn-labels">Male</label>&nbsp;
										<Field type="radio" name="gender" value="Female" />
										&nbsp;
										<label className="radio-btn-labels">Female</label>
										<br></br>
									</div>
									<ErrorMessage name="gender" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="b_group" className="input-labels">
									Blood Group:
								</label>
								&nbsp;
								<section>
									<Field
										as="select"
										name="b_group"
										className="field-non-text-inputs">
										<option value="">Select</option>
										<option value="O+">O+</option>
										<option value="O-">O-</option>
										<option value="A+">A+</option>
										<option value="A-">A-</option>
										<option value="B+">B+</option>
										<option value="B-">B-</option>
										<option value="AB+">AB+</option>
										<option value="AB-">AB-</option>
									</Field>
									<ErrorMessage name="b_group" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="mob_no" className="input-labels">
									Mobile No:
								</label>
								&nbsp;
								<section>
									<Field
										type="tel"
										name="mob_no"
										className="field-inputs"
										placeholder="eg: 8978545846"
									/>
									<br></br>
									<ErrorMessage name="mob_no" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="mail" className="input-labels">
									Email:
								</label>
								&nbsp;
								<section>
									<Field
										type="mail"
										name="mail"
										className="field-inputs"
										placeholder="eg: user123@gmail.com"
									/>
									<br></br>
									<ErrorMessage name="mail" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<label htmlFor="comments" className="input-labels">
									Anything to say?
								</label>
								&nbsp;
								<section className="agree-section">
									<Field
										as="textarea"
										name="comments"
										rows="4"
										className="field-inputs"
									/>
									<ErrorMessage name="comments" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<Field type="checkbox" name="agree" value="agree" />
								&nbsp;
								<section className="agree-section">
									<label htmlFor="agree" className="agree-label">
										Agree to the terms and conditions.{" "}
									</label>
									<ErrorMessage name="agree" />
								</section>
							</div>

							<div style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}>
								<input
									type="submit"
									value="submit"
									className="donate-form-btn"
								/>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
			<div className="donate-right-div">
				<img src={img} alt="reg_form" className="form-img" />
			</div>
		</section>
	);
};

export default Donate;
