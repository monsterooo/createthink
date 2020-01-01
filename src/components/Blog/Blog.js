import React from 'react';
import SplitShap from '../SplitShap/SplitShap';
import BlogCard from './BlogCard';
import './blog.scss';

function Blog({ blogs }) {
  console.log('>>>> ', blogs)
  return (
    <>
      <SplitShap className="text-white" />
      <div className="container latest-blog">
        <section className="section">
          <div className="row">
            {
              blogs.map(blog => <BlogCard key={blog.node.id} blog={blog} />)
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog;
