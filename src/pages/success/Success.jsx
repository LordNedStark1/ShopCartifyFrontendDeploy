import "./Success.css";
import logo from "../../assets/images/applogo.png";
import bags from "../../assets/images/bags.png";
import { useNavigate } from "react-router-dom";

const Success = () => {
	const navigate = useNavigate();
	return (
		<div className="success">
			<div className="successes">
				<div className="success-logo">
					<img src={logo} alt="" />
				</div>

				<div className="bag">
					<img src={bags} alt="" />
				</div>

				<h3>Sucess</h3>
				<button
					type="submit"
					onClick={() => navigate("/")}
					className="btn-payment"
				>
					CONTINUE TO SHOPPING
				</button>
			</div>
		</div>
	);
};

export default Success;
