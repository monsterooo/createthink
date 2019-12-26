import React, { useState, useLayoutEffect } from 'react';
import './header.scss';

function Header() {
  const [stick, setStick] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 60) return setStick(true);
    setStick(false);
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className={`header ${stick ? 'header--stick' : ''}`}>
      <div className="container">
        <nav className="pl-0 pr-0 navbar navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="/">CREATETHINK</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link pl-3 pr-3" href="/">主页 <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3 pr-3" href="/">作品</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3 pr-3" href="/">博客</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3 pr-3" href="/">关于</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3 pr-3" href="/">联系</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;
