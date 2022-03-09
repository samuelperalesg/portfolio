import { Link } from 'react-router-dom'
import logo from '../logo.png'



function Header() {
  return (
    <>
      <nav className='navbar'>
        <Link id='logo' to='/'>
          <img src={logo} alt='Logo'/>
        </Link>
        <div>
          <div className='nav-items'>
            <Link to='/about'>
              <h1>About</h1>
            </Link>
          </div>
          <div className='nav-items'>
            <Link to='/experience'>
              <h1>Experience</h1>
            </Link>
          </div>
          <div className='nav-items'>
            <Link to='/contact'>
              <h1>Contact Me</h1>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header