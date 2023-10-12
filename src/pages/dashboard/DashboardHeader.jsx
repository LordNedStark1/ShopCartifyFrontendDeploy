import logo from "../../assets/images/applogo.png";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu";

const DashboardHeader = () => {
	const navigate = useNavigate();
	return (
		<div className="dashboard-header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>

			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
				<Link to="/">Services</Link>
				<Link to="/">Contact Us</Link>
			</div>
			<div className="dash-btn">
				{/* <div className="burger-menu">&#9776;</div> */}

				<button className="scan-item" onClick={() => navigate("/scan")}>Scan Product</button>
				<DropdownMenu />
			</div>
		</div>
	);
};

export default DashboardHeader;
