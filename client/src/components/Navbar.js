import '../styles/Navbar.css'
import { BellFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link className='nav-title' to='/'><BellFill /> Remindable</Link>
                <div className='nav-links'>
                    <Link className='nav-link' to='/login'>Login</Link>
                    <Link className='nav-link' to='/register'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar