import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import logo from './assets/futsallogo.jpg';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/booking-app/front-end/src/pages/Home.js" className="site-title">
        
        <img src={logo} className="logo" alt='futsal logo' />
      </Link>
      <ul>
        <CustomLink to="/booking-app/front-end/src/pages/Home.js">Home</CustomLink>    
        <CustomLink to="/booking-app/front-end/src/pages/Courts.js">Courts</CustomLink>        
        <CustomLink to="/booking-app/front-end/src/pages/Rules.js">Rules</CustomLink>
        <CustomLink to="/booking-app/front-end/src/pages/Admin.js">Admin </CustomLink>
        <CustomLink to="/booking-app/front-end/src/pages/Login.js">Login</CustomLink>
        <CustomLink to="/booking-app/front-end/src/pages/Register.js">Register</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({to, children, ...props}) {
   const resolvedPath =  useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}> 
        {children}
        </Link>
        </li>
    )
}