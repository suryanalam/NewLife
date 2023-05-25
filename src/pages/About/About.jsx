import React from "react";
import "./About.css";
import about_img from "./hands.png";
import Counter from "../../components/Counter/Counter";

function About() {
	return (
		<section>
			<div className="about-us-div">
				<div className="text-div">
					<h2 className="about-title">Who we are?</h2>
					<p className="para-text">
						<span>
							<b>NewLife</b>
						</span>{" "}
						is an NGO, a non-governmental organization which is being run by a
						Group of likeminded, highly Educated and dedicated people with a
						non-profit motive that works for the upliftment and rehabilitation
						of the underprivileged Children, Girls, Women and Youth both on the
						National and International level. We have a vision and are task
						oriented and are driven by people with a common interest, we perform
						a variety of services with a social objective and on humanitarian
						grounds.
					</p>

					<p className="para-text">
						The objective of the Mission is to{" "}
						<b>
							“build strong and vibrant institutional platforms for the rural
							poor that would enable them to increase household incomes through
							livelihood enhancements and improved access to financial and other
							services”.
						</b>{" "}
						The focus of the Mission will also include leveraging financial
						resources, livelihood support, public services and to ensure their
						entitlements.
					</p>
				</div>
				<div className="img-div" id="about-img-div">
					<img src={about_img} alt="hands" className="about-img" />
				</div>
			</div>
			<Counter />
		</section>
	);
}

export default About;
