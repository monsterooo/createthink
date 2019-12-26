import React from 'react';
import './hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero__heading col-lg-6 col-md-7">
            <h1>创造&实现商业计划</h1>
            <p className="text-secondary mt-4">CREATETHINK为您提供定制的设计、开发服务, 同时注重制作移动优先的WEB、H5和小程序。根据您的需要量身定义最合适的系统。</p>
            <div>
              <button className="btn btn-green text-white mt-4">免费咨询</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
