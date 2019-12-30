import React from 'react';
import './hero.scss';

function Hero({ className, children }) {
  return (
    <div className={`hero ${className ? className : '' }`}>
      <div className="container">
        <div className="row">
          <div className="hero__heading col-lg-6 col-md-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
