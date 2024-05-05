import '../styles/Dashboard.css'
import { useEffect } from 'react'
import Reminder from '../components/Reminder'
import { Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useRemindersContext } from '../hooks/useRemindersContext'

function Dashboard() {
    const {reminders, dispatch} = useRemindersContext()

    useEffect(() => {
        const fetchReminders = async () => {
            if (reminders.length === 0) {
                const response = await fetch('/api/reminders')
                const data = await response.json()
    
                if (response.ok) {
                    dispatch({type: 'GET_REMINDERS', payload: data})
                }
            }
        }
    
        fetchReminders()
    }, [dispatch, reminders])

    return (
        <div className='dashboard'>
            <div className='reminders'>
                {reminders && reminders.map(reminder => (
                    <Reminder key={reminder._id} reminder={reminder} />
                ))}
                <Link className='reminder-placeholder' to='/create'>
                    <Plus size={100} />
                </Link>
            </div>
        </div>
    )
}

export default Dashboard