import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../components/Login_Context/LoginContext";

const Login = () => {
	const { userLogin, setUserLogin } = useContext(LoginContext);

	const formValidationSchema = yup.object({
		mail: yup
			.string()
			.matches(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, "*Enter a valid email")
			.required(),
		pass: yup
			.string()
			.matches(
				/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?@])[A-Za-z0-9!#@$%&?]{8,}$/,
				"*Enter a valid password"
			)
			.required(),
	});

	return (
		<section className="register-form-bg">
			<Formik
				className="donate-form-div"
				validationSchema={formValidationSchema}
				initialValues={{ mail: "", pass: "" }}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					setUserLogin(true);
					console.log(userLogin);
					resetForm({ values: "" });
				}}>
				<Form className="register-form">
					<div className="register-form-title-div">
						<h2>Login</h2>
					</div>

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<label htmlFor="mail" className="register-form-input-labels">
							Email:
						</label>
						&nbsp;
						<section>
							<Field type="mail" name="mail" className="field-inputs" />
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

					<div>
						<a href="#forgot" alt="forgot">
							forgot password?
						</a>
					</div>

					<div
						style={{ color: "red", fontSize: "clamp(8px,2vw,11px)" }}
						className="register-form-input-div">
						<input type="submit" value="Login" className="register-form-btn" />
					</div>

					<div className="register-form-input-div" id="register-form-last-div">
						<p>
							Don't have an account? <NavLink to="/Register">sign up</NavLink>
						</p>
					</div>
				</Form>
			</Formik>
		</section>
	);
};

export default Login;
