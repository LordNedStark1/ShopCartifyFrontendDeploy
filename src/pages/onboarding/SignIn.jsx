import { Link, useNavigate } from "react-router-dom";
import "./onboarding.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/features/dashboardSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [btnTitle, setBtnTitle] = useState("LOGIN");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => {
			return { ...prev, [name]: value };
		});
		// console.log(user);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user.email || !user.password) {
			toast.error("All fields are required!");

			return;
		}

		try {
			setBtnTitle("Submitting...");

			const response = await axios.post(
				"http://localhost:1961/api/v1/auth/login",
				user
			);
			console.log(response);
			if (response.status === 200) {
				localStorage.setItem(
					"user",
					JSON.stringify(response.data.token)
				);
				toast.success("Login successful");
				setTimeout(() => {
					setBtnTitle(btnTitle);
				}, 1000);
				dispatch(setUserId(response.data.id));
				localStorage.setItem("userId", response.data.id);
				navigate(`/dashboard/profile/`);
			}
		} catch (error) {
			setBtnTitle(btnTitle);
			toast.error(error.message);
		}
	};

	return (
		<>
			<ToastContainer />
			<div className="login">
				<form onSubmit={handleSubmit}>
					<h2>Login</h2>
					<input
						name="email"
						onChange={handleChange}
						type="email"
						placeholder="Email"
					/>
					<input
						onChange={handleChange}
						name="password"
						type="password"
						placeholder="Password"
					/>
					<Link
						to="/forgot-password"
						style={{
							color: "black",
							textAlign: "end",
							fontSize: "14px",
						}}
					>
						Forgot Password?
					</Link>
					<button type="submit">{btnTitle}</button>

					<p>
						Not a user?{" "}
						<Link
							to="/register"
							style={{
								color: "black",
								textAlign: "end",
								textDecoration: "underline",
							}}
						>
							Create an Account
						</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default SignIn;
