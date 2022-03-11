import { Link } from 'react-scroll'
import logo from '../pictures/logo.png'



function Header() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link id='logo' to='home'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>

      <div>
        <div className='nav-items'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
            <h1>home</h1>
          </Link>
        </div>
        <div className='nav-items'>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500}>
            <h1>about</h1>
          </Link>
        </div>
        <div className='nav-items'>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500}>
            <h1>experience</h1>
          </Link>
        </div>
        <div className='nav-items'>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500}>
            <h1>contact</h1>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header