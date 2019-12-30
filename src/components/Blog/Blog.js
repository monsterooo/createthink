import React from 'react';
import SplitShap from '../SplitShap/SplitShap';
import BlogCard from './BlogCard';
import './blog.scss';

function Blog() {
  return (
    <>
      <SplitShap className="text-white" />
      <div className="container latest-blog">
        <section className="section">
          <BlogCard />
        </section>
      </div>
    </>
  )
}

export default Blog;
