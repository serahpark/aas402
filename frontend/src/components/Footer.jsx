import '../styling/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/about'>
                <p className='footer-text'>
                    By Serah Park<br />
                    Inspired by <i>I M U U R 2</i> (Vō 2013)
                </p>
            </Link>
        </div>
    )
}

export default Footer