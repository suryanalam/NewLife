import "./App.css";
import React, { useContext, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/Login_Context/LoginContext";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Donate from "./pages/Donate/Donate";
const LazyHome = React.lazy(() => import("./pages/Home/Home"));
const LazyAbout = React.lazy(() => import("./pages/About/About"));
const LazyDonors = React.lazy(() => import("./pages/Donors/Donors"));
const LazyError = React.lazy(() => import("./pages/Login/Login"));

function App() {
	const { userLogin } = useContext(LoginContext);

	return (
		<div className="App">
			{userLogin ? (
				<>
					<Header />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<Suspense fallback={<p>loading...</p>}>
									<LazyHome />
								</Suspense>
							}></Route>
						<Route
							exact
							path="/Home"
							element={
								<Suspense fallback={<p>loading...</p>}>
									<LazyHome />
								</Suspense>
							}></Route>
						<Route
							exact
							path="/About"
							element={
								<Suspense fallback={<p>loading...</p>}>
									<LazyAbout />
								</Suspense>
							}></Route>
						<Route
							exact
							path="/Donors"
							element={
								<Suspense fallback={<p>loading...</p>}>
									<LazyDonors />
								</Suspense>
							}></Route>
						<Route
							exact
							path="/Donate"
							element={
								<Suspense fallback={<p>loading...</p>}>
									<Donate />
								</Suspense>
							}></Route>
						<Route
							exact
							path="*"
							element={
								<Suspense fallback={<p>loading...</p>}>
									<LazyError />
								</Suspense>
							}></Route>
					</Routes>
					<Footer />
				</>
			) : (
				<>
					<Routes>
						<Route exact path="/" element={<Login />}></Route>
						<Route exact path="/Register" element={<Register />}></Route>
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
