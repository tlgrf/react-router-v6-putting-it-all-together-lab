import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      {/* these are links that won't reload the page */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar