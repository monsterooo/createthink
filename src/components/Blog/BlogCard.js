import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import avatar from '../Home/assets/avatar.jpeg';

function BlogCard({ blog: { node } }) {
  console.log('blog > ', node)
  return (      
    <div className="col-4 bg-white">
      <div className="latest-blog__item rounded border">
        <div className="latest-blog__img" style={{ backgroundImage: `url(${node.image.childImageSharp.fluid.src})` }}></div>
        <div className="p-3">
          <div className="clearfix">
            <small className="float-left">{node.category.title}</small>
            <small className="float-right text-muted">{node.created_at}</small>
          </div>
          <Link className="latest-blog__title d-block mt-2 mb-2" to={`/${node.id}`} alt={node.title}>{node.title}</Link>
          <p className="text-secondary">{node.description}</p>
          <div className="latest-blog__avatar border-top mt-3 pt-3 d-flex align-items-center">
            <img className="shadow rounded-pill mr-2" src={avatar} alt={node.title} />
            <span>{node.author.username}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
