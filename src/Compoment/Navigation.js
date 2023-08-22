import React, { useEffect, useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import '../Styles/Navebar.css';
import { useDispatch } from "react-redux";
import { setLoginState } from "../Slice/userSlice";
const Navigation = () => {
  const dispatch = useDispatch(); 
  const navigate=useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const logoutUser = () => {
    window.sessionStorage.clear();
    dispatch(setLoginState(false));
    navigate('/', { replace: true });
    
  };
  useEffect(() => {
    console.log(location);
  },[location])

  return (
    <nav>
      <button className="menu-button" onClick={handleMenuClick}>
        <i className="fas fa-bars" style={{ transform: isMenuOpen ? 'rotate(45deg)' : 'none' }}></i>
      </button>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} onClick={handleMenuClick}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`} onClick={handleMenuClick}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/content" className={`nav-link ${location.pathname === "/content" ? 'active' : ''}`} onClick={handleMenuClick}>Contac US</Link>
        </li>
        <li className="nav-item">
        {isLoggedIn ? (
            <Link to="/" className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} onClick={logoutUser}>SignOut</Link>
          ) : (
            <Link to="/signin" className={`nav-link ${location.pathname === "/signin" ? 'active' : ''}`} onClick={handleMenuClick}>SignIn</Link>
          )}
        </li>
        
      </ul>
    </nav>
  );
}

export default Navigation;
