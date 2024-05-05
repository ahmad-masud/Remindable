import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <p className='footer-text'>Copyright © {new Date().getFullYear()} Remindable. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer