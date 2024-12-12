import '../styling/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to='/' className='header-link'>
            <header className="header">
                <h1 className='header-text'>Particle Horizon</h1>
            </header>
        </Link>
    )
}

export default Header