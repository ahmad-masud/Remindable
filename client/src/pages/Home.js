import { useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import email from '../assets/email.png'
import form from '../assets/form.png'
import reminders from '../assets/reminders.png'

function Home() {
    useEffect(() => {
        document.title = 'Remindable'
    }, [])

    return (
        <div className='home'>
            <div className='hero'>
                <div className='hero-text-container'>
                    <p className='hero-title'>The easy-to-use reminder tool</p>
                    <p className='hero-text'>Automatically sends you a scheduled email after you create a reminder</p>
                    <Link to='/register' className='hero-button'>Get Started</Link>
                </div>
            </div>
            <p className='title'>Features</p>
            <div className='features'>
                <div className='feature'>
                    <img className='feature-image' src={form} alt='form' />
                    <div className='feature-text-container'>
                        <p className='feature-title'>Simple</p>
                        <p className='feature-text'>Create a reminder in seconds</p>
                    </div>
                </div>
                <div className='feature'>
                    <img className='feature-image' src={reminders} alt='reminders' />
                    <div className='feature-text-container'>
                        <p className='feature-title'>Customizable</p>
                        <p className='feature-text'>Set the date and time for your reminder</p>
                    </div>
                </div>
                <div className='feature'>
                    <img className='feature-image' src={email} alt='email' />
                    <div className='feature-text-container'>
                        <p className='feature-title'>Email</p>
                        <p className='feature-text'>Receive an email when it's time for your reminder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home