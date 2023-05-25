import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import React from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const formValidationSchema = yup.object({
		name: yup
			.string()
			.matches(/^[a-zA-Z0-9]+([_\\s\\-]?[a-zA-Z0-9])*$/, "*Enter a valid name")
			.required(),
		mob_no: yup.string().min(10, "*Enter a valid number").required(),
		mail: yup
			.string()
			.matches(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, "*Enter a valid email")
			.required(),
		agree: yup
			.array()
			.min(1, "*Agree to terms and conditions to submit")
			.required(),
	});

	return (
		<section className="register-form-bg">
			<Formik
				className="donate-form-div"
				validationSchema={formValidationSchema}
				initialValues={{ name: "", mail: "", pass: "", agree: "" }}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					navigate("/");
					resetForm({ values: "" });
				}}>
				<Form className="register-form">
					<div className="register-form-title-div">
						<h2>Register</h2>
					</div>

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<label htmlFor="name" className="register-form-input-labels">
							Full Name:
						</label>
						&nbsp;
						<section>
							<Field type="text" name="name" className="field-inputs" />
							<br></br>
							<ErrorMessage name="name" />
						</section>
					</div>

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<label htmlFor="mob_no" className="register-form-input-labels">
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

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<label htmlFor="mail" className="register-form-input-labels">
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

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<label htmlFor="pass" className="register-form-input-labels">
							Password:
						</label>
						&nbsp;
						<section>
							<Field type="password" name="pass" className="field-inputs" />
							<br></br>
							<ErrorMessage name="pass" />
						</section>
					</div>

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<Field type="checkbox" name="agree" value="agree" />
						&nbsp;
						<section className="agree-section">
							<label htmlFor="agree" className="agree-label">
								Agree to the terms and conditions.{" "}
							</label>
							<ErrorMessage name="agree" />
						</section>
					</div>

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<input
							type="submit"
							value="Register"
							className="register-form-btn"
						/>
					</div>

					<div className="register-form-input-div" id="register-form-last-div">
						<p>
							Already have an account? <NavLink to="/">Login</NavLink>
						</p>
					</div>
				</Form>
			</Formik>
		</section>
	);
};

export default Register;
