import { Link, useNavigate } from "react-router-dom";
import "./onboarding.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
	});
	const [btnTitle, setBtnTitle] = useState("Sign Up");

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => {
			return { ...prev, [name]: value };
		});
		
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!user.firstName ||
			!user.lastName ||
			!user.userName ||
			!user.email ||
			!user.password
		) {
			toast.error("All fields are required!");
			return;
		}

		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

		if (!passwordRegex.test(user.password)) {
			toast.error(
				"Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long"
			);
			return;
		}
		try {
			setBtnTitle("Submitting...");

			const response = await axios.post(
				"http://localhost:1961/api/v1/auth/register",
				user
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

			<div className="register">
				<form onSubmit={handleSubmit}>
					<h2>CREATE ACCOUNT</h2>
					<input
						name="firstName"
						onChange={handleChange}
						type="text"
						placeholder="First Name"
					/>
					<input
						name="lastName"
						onChange={handleChange}
						type="text"
						placeholder="Last Name"
					/>

					<input
						name="userName"
						onChange={handleChange}
						type="text"
						placeholder="Username"
					/>
					<input
						name="email"
						onChange={handleChange}
						type="email"
						placeholder="Email"
					/>
					<input
						name="password"
						onChange={handleChange}
						type="password"
						placeholder="Password"
					/>
					<p>
						Already a user?{" "}
						<Link
							to="/login"
							style={{
								color: "black",
								textAlign: "end",
								textDecoration: "underline",
							}}
						>
							Login
						</Link>
					</p>
					<button type="submit">{btnTitle}</button>
				</form>
			</div>
		</>
	);
};

export default SignUp;
