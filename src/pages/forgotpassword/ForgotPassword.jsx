import "./forgotPassword.css";

const ForgotPassword = () => {
	const handleSubmit = () => {};

	const handleChange = () => {};
	return (
		<div className="forgotPassword">
			<form onSubmit={handleSubmit}>
				<h2>Forgot Password </h2>
				<p>
					Please enter your email address. You will receive a link to
					reset your password via email
				</p>
				<input
					name="email"
					onChange={handleChange}
					type="email"
					placeholder="Email"
				/>

				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default ForgotPassword;
