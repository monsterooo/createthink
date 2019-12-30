import React from 'react';
import covert1 from '../Home/assets/covert1.jpeg';

function BlogCard() {
  return (
    <div className="row mt-5">
      <div className="col-4 bg-white">
        <div className="latest-blog__item rounded border">
          <div className="latest-blog__img" style={{ backgroundImage: `url(https://static.oschina.net/uploads/img/201912/23084003_H5oT.png)` }}></div>
          <div className="p-3">
            <div className="clearfix">
              <small className="float-left">React</small>
              <small className="float-right text-muted">2019-12-25</small>
            </div>
            <a href="/" className="latest-blog__title d-block mt-2 mb-2">React Hooks 指南</a>
            <p className="text-secondary">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
            <div className="latest-blog__avatar border-top mt-3 pt-3 d-flex align-items-center">
              <img className="shadow rounded-pill mr-2" src={covert1} alt="" />
              <span>MonsterOOO</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 bg-white">
        <div className="latest-blog__item rounded border">
          <div className="latest-blog__img" style={{ backgroundImage: `url(https://static.oschina.net/uploads/img/201912/23084003_H5oT.png)` }}></div>
          <div className="p-3">
            <div className="clearfix">
              <small className="float-left">React</small>
              <small className="float-right text-muted">2019-12-25</small>
            </div>
            <a href="/" className="latest-blog__title d-block mt-2 mb-2">React Hooks 指南</a>
            <p className="text-secondary">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
            <div className="latest-blog__avatar border-top mt-3 pt-3 d-flex align-items-center">
              <img className="shadow rounded-pill mr-2" src={covert1} alt="" />
              <span>MonsterOOO</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 bg-white">
        <div className="latest-blog__item rounded border">
          <div className="latest-blog__img" style={{ backgroundImage: `url(https://static.oschina.net/uploads/img/201912/23084003_H5oT.png)` }}></div>
          <div className="p-3">
            <div className="clearfix">
              <small className="float-left">React</small>
              <small className="float-right text-muted">2019-12-25</small>
            </div>
            <a href="/" className="latest-blog__title d-block mt-2 mb-2">React Hooks 指南</a>
            <p className="text-secondary">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
            <div className="latest-blog__avatar border-top mt-3 pt-3 d-flex align-items-center">
              <img className="shadow rounded-pill mr-2" src={covert1} alt="" />
              <span>MonsterOOO</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BlogCard;
