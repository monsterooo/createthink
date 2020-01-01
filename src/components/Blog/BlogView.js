import React from 'react';
import ReactMarkdown from "react-markdown";
import './blog.scss';

function BlogView({ blog }) {
  return (
    <section className="section blog-view">
      <div className="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div className="blog-view__img" style={{ backgroundImage: `url(${blog.image.childImageSharp.fluid.src})` }}></div>
          </div>
          <div class="col-lg-6 mt-4 pt-2">
            <div class="title-heading">
              <ul class="list-unstyled">
                <li class="list-inline-item h6 user text-muted mr-2">
                  <i class="ti-tag"></i> <span class="text-custom">{blog.category.title}</span>
                </li>
                <li class="list-inline-item h6 date text-muted">
                  <i class="ti-timer"></i> {blog.created_at}
                </li>
              </ul>
              <h2>
                <a class="text-dark">{blog.title}</a>
              </h2>
              <div class="mt-4">
                <div class="d-flex">
                  <img src="images/client/05.jpg" class="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                  <div class="author mt-2">
                    <h6 class="mb-0">
                      <span class="text-dark name">{blog.author.username}</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <div class="col-md-12">
            <div class="border rounded position-relative overflow-hidden">
              <div class="blog-view__content p-4 text-muted">
                <ReactMarkdown
                  source={blog.content}
                  transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
                />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogView;
