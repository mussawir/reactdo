import React from 'react'
import '.././Header/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
type Props = {}

const Navbar = (props: Props) => {
    const [isNavExpanded, setIsNavExpanded] = React.useState(true)
  return (
    <>
     <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
       <MenuIcon/>
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav></>
  )
}

export default Navbar