import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">
              HRInsights<span>KSA</span>
            </Link>
          </h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/home" className={isActive('/home') || isActive('/')}>
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base" className={isActive('/knowledge-base')}>
                <i className="fas fa-book"></i> Knowledge Base
              </Link>
            </li>
            <li>
              <Link to="/discussions" className={isActive('/discussions')}>
                <i className="fas fa-comments"></i> Community
              </Link>
            </li>
            <li>
              <Link to="/open-chat" className={isActive('/open-chat')}>
                <i className="fas fa-comment-dots"></i> Open Chat
              </Link>
            </li>
            <li>
              <Link to="/hr-tools" className={isActive('/hr-tools')}>
                <i className="fas fa-toolbox"></i> HR Tools
              </Link>
            </li>
            <li>
              <Link to="/profile" className={isActive('/profile')}>
                <i className="fas fa-user"></i> Profile
              </Link>
            </li>
          </ul>
        </nav>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none' }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;