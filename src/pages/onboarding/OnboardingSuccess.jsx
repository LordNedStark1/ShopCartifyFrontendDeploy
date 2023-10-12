import check from "../../assets/images/check.png";

const OnboardingSuccess = () => {
	return (
		<div className="onboarding">
			<div className="message">
				<img src={check} alt="" />
				<h2>Registration Successful</h2>
				<p>
					We are happy to let you know that your account has been
					created successfully. Kindly check your email and click the
					link we sent to verify your email.
				</p>
			</div>
		</div>
	);
};

export default OnboardingSuccess;
