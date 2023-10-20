import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./updateProfile.css";
import Success from "../../success/Success";
import BASE_URL from "../../../url/Url";
// import { useSelector } from "react-redux";

const UpdateProfile = () => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
	});

	// const navigate = useNavigate();

	// const userId = useSelector((state) => state.dashboard.userId);
	const userId = localStorage.getItem("userId");
	const id = JSON.parse(userId);
	console.log(id);

	const getUserById = async () => {
		const res = await axios.get(
			`${BASE_URL}/api/v1/user/find-by-id/${id}`
		);
		console.log(res);

		setUser((prevState) => ({
			...prevState,
			userName: res.data.userName,
			firstName: res.data.firstName,
			lastName: res.data.lastName,
			email: res.data.email,
		}));
		console.log("Success");
		console.log(id);
		console.log(user);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => {
			return { ...prev, [name]: value };
		});
		// console.log(user);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);

		try {
			const response = await axios.put(
				`http://localhost:8080/api/v1/user/update-profile?email=${user.email}`,
				user
			);
			console.log(response);
			if (response.status === 200) {
				alert("User updated successfully");
			}

			getUserById();
		} catch (error) {
			console.log(error);
			// alert(error.response.data.message);
		}
	};

	useEffect(() => {
		getUserById();
	}, []);

	return (
		<div className="update-profile">
			<form onSubmit={handleSubmit}>
				<h2>Personal Information</h2>

				<input
					name="firstName"
					onChange={handleChange}
					type="text"
					value={user.firstName}
					placeholder="First Name"
				/>
				<input
					name="lastName"
					onChange={handleChange}
					type="text"
					value={user.lastName}
					placeholder="Last Name"
				/>
				<input
					name="userName"
					onChange={handleChange}
					type="text"
					value={user.userName}
					placeholder="username"
				/>
				<input
					name="email"
					onChange={handleChange}
					type="email"
					value={user.email}
					placeholder="Email"
				/>
				<div className="chngpswd">
					<label htmlFor="">Password</label>
					<Link to={"/change-password"}>Change Password</Link>
				</div>
				<input
					name="password"
					onChange={handleChange}
					type="password"
					placeholder="Password"
				/>

				<div className="notification">
					<p>Notifications</p>
				</div>

				<div className="promotion">
					<label htmlFor="">Promotions</label>
					<input type="radio" className="promo" />
				</div>

				<div className="advertising">
					<label htmlFor="">Advertising</label>
					<input type="radio" className="promo" />
				</div>

				<button type="submit">UPDATE</button>
			</form>
		</div>
	);
};

export default UpdateProfile;
