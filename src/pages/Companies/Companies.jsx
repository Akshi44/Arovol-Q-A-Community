import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import CompaniesList from './CompaniesList';
import './Companies.css';
import wirelesscar from '../../images/WirelessCarlogo.png'
import Abby from '../../images/Abbylogo.png'
import ebay from '../../images/ebaylogo.png'
import wetspac from '../../images/wetspaclogo.png'
import pluralsight from '../../images/pluralsightlogo.png'
const Companies = () => {
		const companiesList = [
				{
					companylogo: <img style={{height:'30px',width:'120px',display:'inline-block',marginRight:'20px'}} src={wirelesscar} alt="" />,
					companyName: "WirelessCar",
					companyDesc:
						"WirelessCar aims to lead the digitalization of the automotive industry and make a difference for smart, safe, sustainable mobility. Our engineering teams are at the heart of this journey and deliver new development and operations of cloud-based digital services built on car data. Services that are delivered to many of the largest car makers of the world and more than 10 million cars globally...",
				},
				{
					companylogo: <img style={{height:'20px',width:'120px',display:'inline-block',marginRight:'20px'}}src={Abby} alt="" />,
					companyName: "ABBYY",
					companyDesc:
						"Our Product Development teams are structured in a distributed manner, with the exception of the team responsible for the development of ABBYY Timeline, which is based entirely in Hungary. However, we have consolidated the majority of our Product Development operations in Serbia, where our technical teams, comprising of Developers, Quality Assurance Engineers, Technical Writers, and oth....",
				},
				{
					companylogo: <img style={{height:'30px',width:'120px',display:'inline-block',marginRight:'20px'}}src={ebay} alt="" />,
					companyName: "ebay",
					companyDesc:
						"At eBay, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world. And the ripple effect of our work creates waves of change for our customers, our company, our communities and our planet....",
				},
				{
					companylogo: <img style={{height:'30px',width:'120px',display:'inline-block',marginRight:'20px'}}src={wetspac} alt="" />,
					companyName: "Westpac",
					companyDesc:
						"Our engineers are vital to the success of our digital future. So, we’ve created the best possible environment for you to collaborate and innovate. We’re ensuring the work is challenging yet satisfying by building and assembling using the latest technologies and methods. Everything we do is designed to give you more freedom, more choice, more support, and less red t..."},
				{
					companylogo: <img style={{height:'40px',width:'120px',display:'inline-block',marginRight:'20px'}}src={pluralsight} alt="" />,
					companyName: "Pluralsight",
					companyDesc:
						"Brilliance is everywhere, but opportunity is not Our solutions narrow that brilliance vs. opportunity gap by empowering teams to build better and technologists to dream bigger. Over the last decade, we’ve transformed the tech skill development market. And we’re not stopping there. We’ve set our sights on new competitive landscapes and solutions that...",
				},        
			];
	return (
		<div className='home-container-1'>
			<LeftSidebar />
			<div className="home-container-2">
				<h1 className='Companies-h1'>Companies</h1>
				<p className='Companies-p'>A company is a keyword or label that categorizes your question with other, similar question.</p>
				<p className='Companies-p'>Using the right Companies makes it easir for others to find and answer your question.</p>
			<div className="Companies-list-container">
				{
					companiesList.map((company, index) => (
						<CompaniesList company={company} key={index} />
					))
				}
			</div>
			</div>
		</div>
	)
}

export default Companies
