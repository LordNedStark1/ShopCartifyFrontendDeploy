import { useNavigate } from "react-router-dom";
import "./Otp.css";

const Otp = () => {
	const navigate = useNavigate();
	return (
		<div className="otp">
			<form>
				<h2>Enter OTP</h2>

				<p>Please enter the otp code sent to your phone</p>
				<div className="otp-container">
					<input type="text" name="otp" id="otp" placeholder="*" />

					<input type="text" name="otp" id="otp" placeholder="*" />

					<input type="text" name="otp" id="otp" placeholder="*" />

					<input type="text" name="otp" id="otp" placeholder="*" />
				</div>

				<button
					type="submit"
					className="send-otp"
					onClick={() => navigate("/success")}
				>
					SEND
				</button>
			</form>
		</div>
	);
};

export default Otp;
