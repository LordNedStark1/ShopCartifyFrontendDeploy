import { AddCard } from "./pages/addcards/AddCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/success/Success";
import ChangePassword from "./pages/changepassword/ChangePassword";
import { LandingPage } from "./pages/landingpage/LandingPage";
import SignIn from "./pages/onboarding/SignIn";
import SignUp from "./pages/onboarding/SignUp";
import Payment from "./pages/payment/Payment";

import AdminRegistration from "./components/registration/AdminRegistration";
import RegisterSupermarket from "./components/supermarket/RegisterSupermarket";
import Otp from "./pages/otp/Otp";
import OnboardingSuccess from "./pages/onboarding/OnboardingSuccess";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Receipt from "./pages/dashboard/Receipt";
import Wishlist from "./pages/dashboard/Wishlist";
import Settings from "./pages/dashboard/Settings";
import Promotions from "./pages/dashboard/Promotions";
import CreateFamily from "./pages/createFamily/CreateFamily";
import UpdateProfile from "./pages/dashboard/updateprofile/UpdateProfile";
import ProtectedRoute from "./pages/routes/ProtectedRoute";
import Cart from "./pages/cart/Cart";
import Scan from "./pages/scan/Scan";
import AddProduct from "./pages/addProduct/AddProduct";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
// import BackToScan from "./pages/scan/backToScan";

export default function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<SignIn />} />
					<Route path="/register" element={<SignUp />} />
					<Route
						path="/verify-email"
						element={<OnboardingSuccess />}
					/>
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
 
					<Route path="/payment" element={<Payment />} />
					<Route path="/add-card" element={<AddCard />} />
					<Route path="/otp" element={<Otp />} />

					<Route path="/success" element={<Success />} />

					<Route element={<ProtectedRoute path="/login" />}>
						<Route path="/dashboard" element={<DashboardLayout />}>
							<Route
								path="/dashboard/profile/"
								element={<UpdateProfile />}
							/>
							<Route
								path="/dashboard/create-family"
								element={<CreateFamily />}
							/>
							<Route
								path="/dashboard/view-receipt"
								element={<Receipt />}
							/>
							<Route
								path="/dashboard/wishlist"
								element={<Wishlist />}
							/>
							<Route
								path="/dashboard/promotions"
								element={<Promotions />}
							/>

							<Route
								path="/dashboard/settings"
								element={<Settings />}
							/>
						</Route>
					</Route>
					<Route
						path="/change-password"
						element={<ChangePassword />}
					/>
					<Route
						path="/dashboard/adminRegistration"
						element={<AdminRegistration />}
					></Route>
					<Route
						path="/dashboard/registerSupermarket"
						element={<RegisterSupermarket />}
					/>
					<Route path="/updateProfile" element={<UpdateProfile />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/scan" element={<Scan />} />
					<Route path="/addProduct" element={<AddProduct />} />
					{/* <Route path="/BackToScan" element={<BackToScan />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}
