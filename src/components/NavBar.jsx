import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/applogo.png";
import "./Reusables.css";
import { useRef } from "react";

const NavBar = () => {
	const navigate = useNavigate();
	const user = localStorage.getItem("user");
	const token = JSON.parse(user);
	const dropdownRef = useRef(null);

	const handleLogOut = () => {
		const confirmLogout = window.confirm(
			"Are you sure you want to Logout?"
		);
		if (confirmLogout) {
			localStorage.removeItem("user");
			window.location.reload();
		}
	};

	const toggleDropdown = () => {
		dropdownRef.current.classList.toggle("show");
	};

	window.addEventListener("click", (event) => {
		if (!event.target.matches(".account-button")) {
			const dropdowns = document.querySelectorAll(".dropdown-content");
			dropdowns.forEach((dropdown) => {
				if (dropdown.classList.contains("show")) {
					dropdown.classList.remove("show");
				}
			});
		}
	});

	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="" />
			</div>

			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
				<Link to="/">Services</Link>
				<Link to="/">Contact Us</Link>
			</div>

			<div className="account">
				{token ? (
					<div className="dropdown">
						<button
							className="account-button"
							onClick={toggleDropdown}
						>
							Account &#9662;
						</button>
						<div className="dropdown-content" ref={dropdownRef}>
							<Link
								to="/dashboard/profile"
								className="dash-profile"
							>
								Dashboard
							</Link>
							<button onClick={handleLogOut}>Logout</button>
						</div>
					</div>
				) : (
					<>
						<button className="loginButt" onClick={() => navigate("/login")}>
							Login
						</button>
						<button className="createButt" onClick={() => navigate("/register")}>
							Sign Up
						</button>
					</>
				)}
				<div className="burger-menu">&#9776;</div>
			</div>
		</div>
	);
};

export default NavBar;
