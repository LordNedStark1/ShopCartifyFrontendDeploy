import Lottie from "lottie-react";
import qrcode from "../../assets/images/qrcode.json";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
	const navigate = useNavigate();
	return (
		<div className="hero">
			<div className="hero-background">
				<div className="left">
					<div className="content">
						<h2>
							<span>Scan </span>Your Way To Checkout
						</h2>
						<p>
							Driving payments innovation with our smart solution
						</p>
						<button 
						 onClick={()=>navigate("/scan")}
						 >Scan Here</button>
					</div>
				</div>
				<div className="right">
					<Lottie className="qrcode" animationData={qrcode}></Lottie>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
