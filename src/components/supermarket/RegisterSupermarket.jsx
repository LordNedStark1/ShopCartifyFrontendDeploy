import { Link, useNavigate } from "react-router-dom";
import "./registerSupermarket.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const RegisterSupermarket = () => {
	const [supermarket, setSupermarket] = useState({
		supermarketName: "",
		supermarketEmail: "",
		supermarketLocation: "",
		registeredUserId: localStorage.getItem("userId"),
	});
	const [btnTitle, setBtnTitle] = useState("Sign Up");

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSupermarket((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!supermarket.supermarketName ||
			!supermarket.supermarketEmail ||
			!supermarket.supermarketLocation
		) {
			toast.error("All fields are required!");
			return;
		}

		try {
			setBtnTitle("Submitting...");

			const response = await axios.post(
				"http://localhost:8080/api/v1/supermarketAdminController/registerSupermarketAdmin",
				supermarket
			);
			console.log(response);
			if (response.status === 201) {
				toast.success("Account created successfully");
			}
			setTimeout(() => {
				setBtnTitle(btnTitle);
				navigate("/verify-email");
			}, 2000);
		} catch (error) {
			setBtnTitle(btnTitle);
			toast.error(error.message);
		}
	};

	return (
		<>
			<ToastContainer />
			<div className="loginSupermarket">
				<form onSubmit={handleSubmit}>
					<h2>Register Supermarket</h2>
					<input
						name="supermarketName"
						onChange={handleChange}
						type="text"
						placeholder="Company Name"
					/>

					<input
						name="supermarketEmail"
						onChange={handleChange}
						type="Email"
						placeholder="Comapny Email"
					/>

					<input
						name="supermarketLocation"
						onChange={handleChange}
						type="text"
						placeholder="Company Location"
					/>

					<input className="file" type="file" placeholder="file" />
					<p>
						Already a User?
						<Link
							to="/register"
							style={{
								color: "black",
								textAlign: "end",
								textDecoration: "underline",
							}}
						>
							<span>Login </span>
						</Link>
					</p>
					<button type="submit">SIGN UP</button>
				</form>
			</div>
		</>
	);
};

export default RegisterSupermarket;
