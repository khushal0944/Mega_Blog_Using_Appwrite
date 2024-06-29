import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import './App.css'
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login({ userData }));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => setLoading(false));
	}, []);

	return !loading ? (
		<div className="w-full bg-[#000000]">
				<Header />
				<main className="min-h-[calc(100vh-11rem)]">
					<Outlet />
				</main>
				<Footer />
		</div>
	) : <h1>Loading....</h1>;
}

export default App;
