import logoutIcon from './assets/logout-icon.svg'

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar_logo">
                    <h1><a href="#">Cerebro</a></h1>
                </div>
                <div className="navbar_logout">
                    <button className="navbar_logout-btn flex-center">
                        <img src={logoutIcon} alt="logout" /><span>&nbsp;Log Out</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header