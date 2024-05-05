import '../styles/Navbar.css'
import { BellFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

function Navbar() {
    const { logout } = useLogout()
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link className='nav-title' to='/'><BellFill /> Remindable</Link>
                <div className='nav-links'>
                    <Link className='nav-link' to='/login'>Login</Link>
                    <Link className='nav-link' to='/register'>Register</Link>
                    <Link to='/account' className='nav-link'>Account</Link>
                    <button className='nav-link' onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar