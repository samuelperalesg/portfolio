import { Link } from 'react-router-dom'
import logo from '../pictures/logo.png'



function Header() {
  return (
      <nav className='navbar'>
        <Link id='logo' to='/'>
          <img src={logo} alt='Logo'/>
        </Link>
        <div>
          <div className='nav-items'>
            <Link to='/'>
              <h1>home</h1>
            </Link>
          </div>
          <div className='nav-items'>
            <Link to='/about'>
              <h1>about</h1>
            </Link>
          </div>
          <div className='nav-items'>
            <Link to='/experience'>
              <h1>experience</h1>
            </Link>
          </div>
          <div className='nav-items'>
            <Link to='/contact'>
              <h1>contact</h1>
            </Link>
          </div>
        </div>
      </nav>
  )
}

export default Header