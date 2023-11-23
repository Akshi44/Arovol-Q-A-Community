import React from 'react'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const User2 = () => {
  return (
	<div className="home-container-1">
			<LeftSidebar />
			<div className="home-container-2">
				<section>
					<div className="user-details-container">
						<div className="user-details">
							<div className="avatar two">{"Kumar".charAt(0).toUpperCase()}</div>
							<div className="user-name">
								<h1>Kumar</h1>
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
						<p className="tagelement"style={{color:'#39739d',width:'80px'}}>Typescript</p>
						<p className="tagelement" style={{color:'#39739d',width:'60px'}}>python</p>
					</div>
				</div>
				<div className="about" >
					About
					<div>
						<p className="aboutelement" style={{fontWeight:'lighter'}}>I am a Front end developer</p>
					</div>
				</div>
			</div>
		</div>

  )
}

export default User2
