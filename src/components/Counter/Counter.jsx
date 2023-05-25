import React, { useState } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
	const [counterOn, setCounterOn] = useState(false);
	return (
		<ScrollTrigger
			onEnter={() => setCounterOn(true)}
			onExit={() => setCounterOn(false)}>
			<section className="counters-div">
				<div className="counter-card">
					<h2 className="counter-card-value">
						{counterOn && <CountUp start={0} end={80} duration={5} delay={1} />}
					</h2>
					<h3 className="counter-card-title">Life's Saved</h3>
				</div>

				<div className="counter-card">
					<h2 className="counter-card-value">
						{counterOn && (
							<CountUp start={0} end={120} duration={5} delay={1} />
						)}
					</h2>
					<h3 className="counter-card-title">Volunteers</h3>
				</div>

				<div className="counter-card">
					<h2 className="counter-card-value">
						{" "}
						{counterOn && (
							<CountUp start={0} end={100} duration={5} delay={1} />
						)}
					</h2>
					<h3 className="counter-card-title">Campaigns</h3>
				</div>
			</section>
		</ScrollTrigger>
	);
};

export default Counter;
