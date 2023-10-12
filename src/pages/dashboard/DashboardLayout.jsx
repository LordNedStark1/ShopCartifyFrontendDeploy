import { Link, Outlet, useParams } from "react-router-dom";
import "./dashboard.css";
import DashboardHeader from "./DashboardHeader";
import personaccount from "../../assets/images/personaccount.png";
import family from "../../assets/images/family.png";
import receipts from "../../assets/images/receipts.png";
import wishlist from "../../assets/images/wishlist.png";
import promotions from "../../assets/images/promotions.png";
import settings from "../../assets/images/settings.png";

const DashboardLayout = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div className="dashboard">
			<DashboardHeader />
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div className="sidebar">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img
							src={personaccount}
							alt=""
							style={{ width: "30px" }}
						/>
						<Link
							to="/dashboard/profile"
							style={{ color: "white", textDecoration: "none" }}
						>
							My details
						</Link>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img src={family} alt="" style={{ width: "40px" }} />
						<Link
							to="/dashboard/create-family"
							style={{ color: "white", textDecoration: "none" }}
						>
							Create Family
						</Link>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img src={receipts} alt="" style={{ width: "30px" }} />
						<Link
							to="/dashboard/view-receipt"
							style={{ color: "white", textDecoration: "none" }}
						>
							View Receipt
						</Link>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img src={wishlist} alt="" style={{ width: "30px" }} />

						<Link
							to="/dashboard/wishlist"
							style={{ color: "white", textDecoration: "none" }}
						>
							Wishlist
						</Link>
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img
							src={promotions}
							alt=""
							style={{ width: "30px" }}
						/>

						<Link
							to="/dashboard/promotions"
							style={{ color: "white", textDecoration: "none" }}
						>
							Promotions
						</Link>
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img src={settings} alt="" />
						<Link
							to="/dashboard/settings"
							style={{ color: "white", textDecoration: "none" }}
						>
							Settings
						</Link>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img
							src={personaccount}
							alt=""
							style={{ width: "30px" }}
						/>
						<Link
							to="/dashboard/registerSupermarket"
							style={{ color: "white", textDecoration: "none" }}
						>
							Supermarket
						</Link>
					</div>
				</div>
				<div className="dash-pages">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
