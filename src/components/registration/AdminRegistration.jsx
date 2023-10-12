import { Link } from "react-router-dom";
import '../registration/adminRegistration.css'

const AdminRegistration = () => {
	return (
		<div className="Supermarket">
			<form>
				<h2>Admin Sign Up</h2>
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
                
                <select name="" className="Role">
                <option value="">Super Admin</option>
				<option value="">Checkout Admin</option>
				<option value="">Supermarket Admin</option>
                </select>
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
				<button type="submit">SIGN UP</button>
			</form>
		</div>
	);
};

export default AdminRegistration;