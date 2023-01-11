import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Futsal
      </Link>
      <ul>
        <CustomLink to="/booking-app/front-end/src/pages/Login.js">Login</CustomLink>
        <CustomLink to="/booking-app/front-end/src/pages/Courts.js">Courts</CustomLink>
        <CustomLink to="/booking-app/front-end/src/pages/Rules.js">Rules</CustomLink>
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