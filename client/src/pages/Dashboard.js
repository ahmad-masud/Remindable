import '../styles/Dashboard.css'
import { useEffect, useState } from 'react'
import Reminder from '../components/Reminder'
import { Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [reminders, setReminders] = useState(null)

    useEffect(() => {
        const fetchReminders = async () => {
            const response = await fetch('/api/reminders')
            const data = await response.json()

            if (response.ok) {
                setReminders(data.sort((a, b) => new Date(a.date) - new Date(b.date)))
            }
        }

        fetchReminders()
    }, [])

    return (
        <div className='dashboard'>
            <div className='reminders'>
                {reminders && reminders.map(reminder => (
                    <Reminder key={reminder._id} reminder={reminder} />
                ))}
                <Link className='reminder-placeholder' to='/form'>
                    <Plus size={100} />
                </Link>
            </div>
        </div>
    )
}

export default Dashboard