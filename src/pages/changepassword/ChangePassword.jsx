import { Link, useNavigate } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
	const navigate = useNavigate();
	return (
		<div className="changepwd">
			<form>
				<p style={{ fontWeight: "700" }}>Password Change</p>
				<input
					type="password"
					name="oldpswd"
					id="oldpswd"
					placeholder="Old Password"
					style={{ marginBottom: "5px" }}
				/>
				<Link
					to="/"
					style={{
						textAlign: "end",
						fontSize: "14px",
						marginBottom: "15px",
					}}
				>
					Forgot Password?
				</Link>
				<input
					type="password"
					name="newpswd"
					id="newpswd"
					placeholder="New Password"
					style={{ marginBottom: "30px" }}
				/>
				<input
					type="password"
					name="confirmpswd"
					id="confirmpswd"
					placeholder="Confirm Password"
					style={{ marginBottom: "30px" }}
				/>
				<button
					type="submit"
					className="btn-payment"
					style={{
						width: "100%",
					}}
					onClick={() => navigate("/dashboard")}
				>
					Save Password
				</button>
			</form>
		</div>
	);
};

export default ChangePassword;
