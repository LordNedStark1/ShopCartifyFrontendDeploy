import NavBar from "../../components/NavBar";
import HeroSection from "./HeroSection";
import "./LandingPage.css";

export const LandingPage = () => {
	return (
		<div className="landing-page">
			<NavBar />
			<HeroSection />
		</div>
	);
};
