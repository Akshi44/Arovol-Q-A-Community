import React from 'react'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const User3 = () => {
	return (
		<div className="home-container-1">
			<LeftSidebar />
			<div className="home-container-2">
				<section>
					<div className="user-details-container">
						<div className="user-details">
							<div className="avatar three">{"Priyanka".charAt(0).toUpperCase()}</div>
							<div className="user-name">
								<h1>Priyanka</h1>
								<p>
									<FontAwesomeIcon icon={faBirthdayCake} /> Joined - 5 months ago
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="tag" >
					Watched tags
					<div>
						<p className="tagelement"style={{color:'#39739d',width:'40px'}}>CPP</p>
						<p className="tagelement" style={{color:'#39739d',width:'50px'}}>Java</p>
					</div>
				</div>
				<div className="about" >
					About
					<div>
						<p className="aboutelement" style={{fontWeight:'lighter'}}>I am a content writter</p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default User3
