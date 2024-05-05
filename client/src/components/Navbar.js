import '../styles/Navbar.css'
import { BellFill } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link className='nav-title' to='/'><BellFill /> Remindable</Link>
                <div className='nav-links'>
                    {!user && <Link className='nav-link' to='/login'>Login</Link>}
                    {!user && <Link className='nav-link' to='/register'>Register</Link>}
                    {user && <Link to='/account' className='nav-link'>Account</Link>}
                    {user && <button className='nav-link' onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </div>
    )
}

export default Navbar