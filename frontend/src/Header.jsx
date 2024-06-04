import logoutIcon from './assets/logout-icon.svg'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    function handleNavLogin(isLoggedIn){
        if(isLoggedIn){
            navigate('/')
        }
        else{
            navigate('/login')
        }
    }

    return (
        <header>
            <nav className="navbar">
                <div className="navbar_logo">
                    <h1><a href="#">Cerebro</a></h1>
                </div>
                <div className="navbar_logout">
                    <button
                        className={`navbar_logout-btn flex-center ${props.isLoggedIn ? 'navbar-btn-red' : 'navbar-btn-green'}`}
                        onClick={() => handleNavLogin(props.isLoggedIn)}
                    >                       
                        <img src={logoutIcon} alt="logout" /><span>&nbsp;{props.isLoggedIn ? 'Log Out' : 'Log In'}</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header