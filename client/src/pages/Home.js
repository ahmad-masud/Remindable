import { useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import feature1 from '../assets/1.png'
import feature2 from '../assets/2.png'
import feature3 from '../assets/3.png'
import heroImage from '../assets/hero.png'
import ClockFill from 'react-bootstrap-icons/dist/icons/clock-fill'
import FilterSquareFill from 'react-bootstrap-icons/dist/icons/filter-square-fill'
import EnvelopeFill from 'react-bootstrap-icons/dist/icons/envelope-fill'

function Home() {
    useEffect(() => {
        document.title = 'Remindable'
    }, [])

    return (
        <div className='home'>
            <div className='hero'>
                <div className='hero-text-container'>
                    <p className='hero-title'>An easy-to-use email reminder tool</p>
                    <p className='hero-text'>Automatically sends you a scheduled email after you create a reminder</p>
                    <Link to='/register' className='hero-button'>Get Started</Link>
                </div>
                <img className='hero-image' src={heroImage} alt='hero' />
            </div>
            <div className='features-container'>
                <div className='features'>
                    <div className='feature'>
                        <img className='feature-image' src={feature1} alt='form' />
                        <div className='feature-text-container'>
                            <p className='feature-title'><ClockFill /> Get started in <span style={{color: "red"}}>seconds</span></p>
                            <p className='feature-text'>Create reminders easily with an intuitive ui. All you need is two things the title and date of the reminder.</p>
                        </div>
                    </div>
                    <div className='feature'>
                        <img className='feature-image' src={feature2} alt='reminders' />
                        <div className='feature-text-container'>
                            <p className='feature-title'><FilterSquareFill /> <span style={{color: "red"}}>Organize</span> your reminders</p>
                            <p className='feature-text'>Reminders are organized by date and time and you can set the priority of certain reminders if they are more important.</p>
                        </div>
                    </div>
                    <div className='feature'>
                        <img className='feature-image' src={feature3} alt='email' />
                        <div className='feature-text-container'>
                            <p className='feature-title'><EnvelopeFill /> Receive an <span style={{color: "red"}}>email</span></p>
                            <p className='feature-text'>Receive a friendly email when it's time for your reminder so you don't forgot when you have an important event.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='anti-hero'>
                <p className='anti-hero-title'>Get started with Remindable today</p>
                <p className='anti-hero-text'>Never miss a reminder again</p>
                <Link to='/register' className='anti-hero-button'>Make an account</Link>
            </div>
        </div>
    )
}

export default Home