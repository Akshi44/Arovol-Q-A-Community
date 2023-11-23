// Run below command first to get the icons
// npm add @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
// import { faPen} from '@fortawesome/free-solid-svg-icons';
import "./User.css";
const User1 = () => {
	return (
		<div className="home-container-1">
			<LeftSidebar />
			<div className="home-container-2">
				<section>
					<div className="user-details-container">
						<div className="user-details">
							<div className="avatar one">{"Akshita".charAt(0).toUpperCase()}</div>
							<div className="user-name">
								<h1>Akshita</h1>
								<p>
									<FontAwesomeIcon icon={faBirthdayCake} /> Joined - 5 months ago
								</p>
							</div>
						</div>
						{/* {
												<button type="button" >
														<FontAwesomeIcon icon={faPen} /> Edit Profile
												</button>
								} */}
					</div>
				</section>
				<div className="tag" >
					Watched tags
					<div>
						<p className="tagelement"style={{color:'#39739d',width:'40px'}}>c++</p>
						<p className="tagelement" style={{color:'#39739d',width:'60px'}}>python</p>
						<p className="tagelement" style={{color:'#39739d',width:'80px'}}>javascript</p>
					</div>
				</div>
				<div className="about" >
					About
					<div>
						<p className="aboutelement" style={{fontWeight:'lighter'}}>I am a full stack web developer</p>
					</div>
				</div>
			</div>
		</div>
	);}

export default User1
