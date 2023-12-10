import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
// import logo from '../../assests/logo.JPG';
// import logo from '../../assests/logoblue.png';
import logo from '../../assests/logoa.png';
import search from '../../assests/search-solid.svg';
import Avatar from '../../components/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { setCurrentUser }  from '../../actions/currentUser';
import decode from 'jwt-decode'
const Navbar = () =>
{  
	var User = useSelector((state)=>(state.currentUserReducer))
	const dispatch=useDispatch();
	const navigate=useNavigate();

	useEffect(() => {
			const token = User?.token;
			if (token) {
				const decodedToken = decode(token);
				if (decodedToken.exp * 1000 < new Date().getTime()){
					// handleLogout();
				}
			}
			// dispatch(('Profile')) // wrong
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem("Profile") )));
    }, [User?.token, dispatch]) ;

	const handleLogout=()=>{
		dispatch({type:"LOGOUT"})
		navigate('/')
		dispatch(setCurrentUser(null))
	}
  return ( 
	<nav className='main-nav'>  
		<div className="navbar"> 
			<Link to='/' className='nav-item nav-logo'><img src={logo} height="42px" width="100px"  alt="logo"/></Link>
			<Link to='/' className='nav-item nav-btn'>About</Link>
			<Link to='/' className='nav-item nav-btn'>Products</Link>
			<Link to='/' className='nav-item nav-btn'>ForTeams</Link>
			<form >
				<input type="text" placeholder='Search....' />
				<img src={search} alt="search" width="18" className='search-icon'/>
			</form>
			{ User === null ? 
				<Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
				<>
					{/* <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white"><Link to='/User' style={{ color: "white", textDecoration: "none" }}>{User.result.name.charAt[0].toUppercase()}</Link></Avatar> */}
					<Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/User/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>A</Link></Avatar>
					<button className='nav-item nav-links'onClick={handleLogout}>Log out</button>
				</>   
			}
		</div>
	</nav>
  )
}
export default Navbar
/* <Link to={`/Users/${User?.result?._id}`} >{User.result.name.charAt(0).toUpperCase()} */