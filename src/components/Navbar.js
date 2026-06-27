import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({darkMode, toggleTheme}) {
    const textColor = { color: darkMode ? '#f0f0f0' : '#111111' };
    return (
    <div>
            <nav className="navbar navbar-expand-lg" style={{
                backgroundColor: darkMode ? '#111' : '#e8e6e6',
                color: darkMode ? '#f0f0f0' : '#111111'
            }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={textColor}>TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={textColor}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about" style={textColor}>About</Link>
                            </li>
                        </ul>

                        <button type="button" className={darkMode? `btn btn-light ms-auto`:`btn btn-dark ms-auto`} onClick={toggleTheme}>{darkMode? "Light":"Dark"}</button>
                        
                    </div>
                </div>
            </nav>
    </div>
    )
}
