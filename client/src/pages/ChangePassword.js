import '../styles/Form.css'
import { useState } from 'react'
import { useChangePassword } from '../hooks/useChangePassword'
import { useAuthContext } from '../hooks/useAuthContext'

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const { updatePassword, isLoading, error } = useChangePassword()
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updatePassword(user.email, currentPassword, newPassword, confirmNewPassword)

        setCurrentPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
    }

    return (
        <div className='form-container'>
            <div className='form-sub-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <p className='form-title'>Change Password</p>
                    <div className='form-group'>
                        <label className='label' htmlFor='currentPassword'>Current Password</label>
                        <input className='input' type='password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label className='label' htmlFor='newPassword'>New Password</label>
                        <input className='input' type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label className='label' htmlFor='confirmNewPassword'>Confirm New Password</label>
                        <input className='input' type='password' value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required />
                    </div>
                    <button className='submit-button' type='submit' disabled={isLoading} >Submit</button>
                    {error && <p className='form-error'>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default ChangePassword