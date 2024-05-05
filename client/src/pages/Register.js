import '../styles/Form.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register, error, isLoading } = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(firstName, lastName, email, password)
    }

    return (
        <div className='form-container'>
            <div className='form-sub-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <p className='form-title'>Register</p>
                    <div className='form-group'>
                        <label className='label' htmlFor='firstName'>First Name</label>
                        <input className='input' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label className='label' htmlFor='lastName'>Last Name</label>
                        <input className='input' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className='form-group'>         
                        <label className='label' htmlFor='email'>Email</label>
                        <input className='input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label className='label' htmlFor='password'>Password</label>
                        <input className='input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className='submit-button' type='submit' disabled={isLoading} >Register</button>
                    {error && <p className='form-error'>{error}</p>}
                    <p className='form-link'>Already have an account? <Link className='link' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register