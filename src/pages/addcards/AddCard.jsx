import { useNavigate } from "react-router-dom";
import cardLogo from "../../assets/images/cardLogo.png";
import "./AddCard.css";

export const AddCard = () => {
	const navigate = useNavigate();
	return (
		<div className="add-card">
			<form className="add">
				<p
					style={{
						fontWeight: "700",
						fontSize: "30px",
						marginBottom: "20px",
						textAlign: "center",
					}}
				>
					Add Card
				</p>
				<label htmlFor="">Card Number</label>
				<input
					type="text"
					name="cardnumber"
					id="cardnumber"
					placeholder="**** **** **** 1234"
				/>
				<img src={cardLogo} alt="" style={{ marginLeft: "300px" }} />

				<label htmlFor="">Card Number</label>
				<input
					type="text"
					name="holdername"
					id="holdername"
					placeholder=""
				/>
				<div className="card-detail">
					<input
						type="text"
						name="month"
						id="month"
						placeholder="MM"
					/>

					<input type="text" name="year" id="year" placeholder="YY" />

					<input type="text" name="cvv" id="cvv" placeholder="CVV" />
				</div>

				<div className="addcardbtn">
					<button type="submit" onClick={() => navigate("/")}>
						CANCEL
					</button>

					<button type="submit" onClick={() => navigate("/payment")}>
						ADD CARD
					</button>
				</div>
			</form>
			{/* 
			<div className="addCards">
				<p>ADD CARD</p>
			</div> */}
		</div>
	);
};
