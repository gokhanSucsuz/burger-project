import BurgerLogo from '../assets/burgerlogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={BurgerLogo} width="100px" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/menu' className='nav-link'>Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar