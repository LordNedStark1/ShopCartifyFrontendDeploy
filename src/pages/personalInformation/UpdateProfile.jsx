import React from "react";
import '../../pages/personalInformation/UpdateProfile.css'
import { Link } from "react-router-dom";


const UpdateProfile = () => {
	return (
		<div className="PersonalInformation">
			<form>
				<h3>Personal Information</h3>
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="email" placeholder="Email" />
		    <div className="Password">
				<h3>Password</h3>
				<input type="password" placeholder="Password" />
			</div>
			<div className="Notifications">
				<h3>Notifications</h3>
				<div className="Promotions">  Promotions:
					<label class="switch">
						    prom
  						<input type="checkbox"/>
  						<span class="slider"></span>
					</label>
				</div>
				<div className="Advertising"> Advertising:
					<label class="switch">
							Adver
						<input className="u" type="checkbox"/>
						<span class="slider"></span>
					</label>
				</div>
			</div>		
				<button type="submit">Update</button>
			</form>
		</div>
	);
};

export default UpdateProfile;
