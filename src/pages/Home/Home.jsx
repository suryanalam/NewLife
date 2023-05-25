import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../../HomeData.json";
import "./Home.css";

//images
import new_bg from "./new_bg.png";
import eligible_img from "./eligible.png";
import benefits from "./benefits.png";

function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<section className="homeMain-div">
				<div className="text-div">
					<h2 className="slogan">
						<span>Share Blood,</span> <br></br>Save lives
					</h2>
					<p className="caption">
						We serve the people through our blood donations campaigns for the
						needy, Join us and contribute in enhancing the global health !!
					</p>
					<button
						className="join-btn"
						onClick={() => {
							navigate("/Donate");
						}}>
						Donate Now
					</button>
				</div>

				<div className="img-div">
					<img src={new_bg} alt="main-img" className="homeMain-img" />
				</div>
			</section>

			<section className="home-div">
				<div className="text-div">
					{data.eligibility.map((info) => (
						<div key={info.title}>
							<h2 className="title" key={info.title}>
								{info.title}
							</h2>
							<div className="ul-div">
								{info.details.map((points, idx) => (
									<ul key={points}>
										<li key={points}>{points}</li>
									</ul>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="img-div" id="home-img">
					<img src={eligible_img} alt="test-img" className="home-sub-img" />
				</div>
			</section>

			<section className="home-div">
				<div className="text-div">
					{data.benefits.map((info) => (
						<div>
							<h2 className="title" key={info.title}>
								{info.title}
							</h2>
							<div className="ul-div">
								{info.details.map((points) => (
									<ul key={points}>
										<li key={points}>{points}</li>
									</ul>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="img-div" id="home-img">
					<img src={benefits} alt="test-img" className="home-sub-img" />
				</div>
			</section>

			<section className="precautions-div">
				<h2 className="title">Precautions</h2>
				<div className="precautionsCard-div">
					{data.precautions.map((prec, idx) => (
						<div className="HomeCard" key={idx}>
							<h2 className="prec-title" key={prec.title}>
								{prec.title}
								<hr />
							</h2>
							<div className="ul-div">
								{prec.points.map((point) => (
									<ul key={point}>
										<li key={point}>{point}</li>
									</ul>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Home;
