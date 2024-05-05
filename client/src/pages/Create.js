import '../styles/Form.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRemindersContext } from '../hooks/useRemindersContext'
import { useAuthContext } from '../hooks/useAuthContext'

function Create() {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')

    const {dispatch} = useRemindersContext()

    const navigate = useNavigate()

    const { user } = useAuthContext()

    const handleSubmit = async event => {
        event.preventDefault()

        if (!user) {
            setError('You must be logged in to create a reminder')
            return
        }

        const dateTime = new Date(`${date}T${time}`)

        if (dateTime <= new Date()) {
            setError('Date must be in the future')
            return
        }

        const response = await fetch('/api/reminders/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({ title, date: dateTime.toISOString() })
        })
        const data = await response.json()

        if (response.ok) {
            setTitle('')
            setTime('')
            setDate('')
            setError('')
            dispatch({type: 'CREATE_REMINDER', payload: data})
            navigate('/')
        } else {
            setError(data.error)
        }
    }

    return (
        <div className='form-container'>
            <div className='form-sub-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <p className='form-title'>Create Reminder</p>
                    <div className='form-group'>         
                        <label className='label' htmlFor='title'>Title</label>
                        <input className='input' type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Remind me to...' required />
                    </div>
                    <div className='form-group'>
                        <label className='label' htmlFor='time'>Time</label>
                        <input className='input' type='time' id='time' value={time} onChange={(e) => setTime(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label className='label' htmlFor='date'>Date</label>
                        <input className='input' type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <button className='submit-button' type='submit'>Submit</button>
                    {error && <p className='form-error'>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Create