import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <p className='footer-text'>© {new Date().getFullYear()} Remindable, All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer