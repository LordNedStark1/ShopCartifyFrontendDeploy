import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./createFamily.css";

const CreateFamily = () => {
	const [family, setFamily] = useState({
		familyName: "",
	});
	const [newMember, setNewMember] = useState({
		username: "",
	});
	const [members, setMembers] = useState([]);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFamily((prev) => ({ ...prev, [name]: value }));
	};

	const handleMemberChange = (e) => {
		const { name, value } = e.target;
		setNewMember((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddMember = () => {
		if (newMember.username) {
			setMembers([...members, newMember]);
			setNewMember({
				username: "",
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(family);

		try {
			const response = await axios.post(
				"http://localhost:1961/api/v1/family/create-family",
				family
			);
			console.log(response);

			const memberResponse = await axios.post(
				"http://localhost:1961/api/v1/family/add-family-members",
				members
			);
			console.log(memberResponse);

			navigate("/");
		} catch (error) {
			console.error(error);
			alert(error.response.data.message);
		}
	};

	return (
		<div>
			<div className="create-family">
				<form onSubmit={handleSubmit}>
					<h2>CREATE FAMILY ACCOUNT</h2>
					<input
						name="familyName"
						onChange={handleChange}
						type="text"
						placeholder="Family Name"
					/>

					{members.map((member, index) => (
						<input
							key={index}
							name={`member${index}`}
							value={member.username}
							disabled
						/>
					))}
					<div>
						<input
							name="username"
							value={newMember.username}
							onChange={handleMemberChange}
							type="text"
							placeholder="Member Username"
						/>
						<button
							type="button"
							onClick={handleAddMember}
							className="add-member"
						>
							Add Member
						</button>
					</div>

					<button type="submit" className="add-member-signup">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateFamily;
