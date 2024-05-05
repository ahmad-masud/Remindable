import '../styles/Form.css'
import { useState, useEffect } from 'react'
import { useRegister } from '../hooks/useRegister'
import { useAuthContext } from '../hooks/useAuthContext'

function Account() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register, error, isLoading } = useRegister()
    const { user } = useAuthContext()

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setEmail(user.email)
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(firstName, lastName, email, password)
    }

    return (
        <div className='form-container'>
            <div className='form-sub-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <p className='form-title'>Account Management</p>
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
                    <button className='submit-button' type='submit' disabled={isLoading} >Update</button>
                    {error && <p className='form-error'>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Account