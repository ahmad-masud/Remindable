import '../styles/Reminder.css'
import { TrashFill } from 'react-bootstrap-icons'
import { useRemindersContext } from '../hooks/useRemindersContext'
import { useAuthContext } from '../hooks/useAuthContext'

function Reminder({ reminder }) {
    const formatTime = isoDateString => {
        const date = new Date(isoDateString)
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }

    const formatDate = isoDateString => {
        const date = new Date(isoDateString)
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }

    const formattedTime = reminder.date ? formatTime(reminder.date) : 'No time provided'
    const formattedDate = reminder.date ? formatDate(reminder.date) : 'No date provided'

    const { dispatch } = useRemindersContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch(`/api/reminders/delete/${reminder._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        if (response.ok) {
            dispatch({type: 'DELETE_REMINDER', payload: reminder._id})
        }
    }

    return (
        <div className='reminder'>
            <p className='reminder-title'>{reminder.title} <TrashFill className='reminder-delete' size={20} onClick={handleClick} /></p>
            <p className='reminder-time'>{formattedTime}</p>
            <p className='reminder-date'>{formattedDate}</p>
        </div>
    )
}

export default Reminder