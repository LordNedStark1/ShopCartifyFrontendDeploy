// import { Link } from "react-router-dom";
import "./Payment.css";
import cardLogo from "../../assets/images/cardLogo.png";
import { useNavigate } from "react-router-dom";

const Payment = () => {
	const navigate = useNavigate();
	return (
		<div className="payments">
			<form>
				<h2>Payment Method </h2>
				<p>Please choose a payment method to complete your purchase</p>
				<div className="card-details">
					<img src={cardLogo} alt="" />
					<div className="info">
						<div className="card-no">**** **** **** 1234</div>
						<div>Expires 05/25</div>
					</div>
				</div>

				<div className="card-details">
					<img src={cardLogo} alt="" />
					<div className="info">
						<div className="card-no">**** **** **** 1234</div>
						<div>Expires 05/25</div>
					</div>
				</div>

				<button
					type="submit"
					onClick={() => navigate("/add-card")}
					className="add-cards"
				>
					ADD CARD
				</button>
				<button
					type="submit"
					onClick={() => navigate("/otp")}
					className="next"
				>
					NEXT
				</button>
			</form>
		</div>
	);
};

export default Payment;
