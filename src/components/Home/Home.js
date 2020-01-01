import React, { useEffect } from "react";
import { Link } from 'gatsby';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import SplitShap from '../SplitShap/SplitShap';
import BlogCard from '../Blog/BlogCard';
import skillImg from './assets/service-left.jpg';
import covert1 from './assets/covert1.jpeg';
import avatar from './assets/avatar.jpeg';
import './home.scss';

function Home({ blogs }) {
  useEffect(() => {
    $('.customer').owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
    })
  }, [])
  return (
    <>
      <SplitShap className="text-white" />
      <div className="container">
        <section className="section">
          <div className="service">
            <span className="badge badge-green text-white">核心服务</span>
            <h4 className="mt-3">我们提供的服务</h4>
            <p className="text-secondary mt-4">我们都是全栈工程师. 如果您选择我们, 我们会以我们最好的激情和技术为您提供如下核心服务</p>
            <div className="container-fluid mt-5">
              <div className="service__core row text-center">
                <div className="col-lg-3 col-md-4 col-12">
                  <i className="ti-comments-smiley"></i>
                  <h4 className="mt-2">
                    沟通&方案
                  </h4>
                  <p className="text-secondary">在第一个阶段, 我们会与您沟通和了解您的实际情况. 然后根据实际情况制定出最优的解决方案.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <i className="ti-ruler-pencil"></i>
                  <h4 className="mt-2">
                    原型&设计
                  </h4>
                  <p className="text-secondary">在第二个阶段, 我们会给出设计原型图与您确认. 如果方案确定我们将会进入设计阶段, 设计完成我们会与您再次确认.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <i className="ti-hummer"></i>
                  <h4 className="mt-2">
                    制作&开发
                  </h4>
                  <p className="text-secondary">在第三个阶段, 我们会根据设计图进行程序的开发. 其中包括(前台、后台、数据库、框架)等一些列的开发, 其中我们会通过实时协作软件与您同步项目进度.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <i className="ti-link"></i>
                  <h4 className="mt-2">
                    交付&维护
                  </h4>
                  <p className="text-secondary">在第四个阶段, 我们会为您部署项目与使用教学. 之后如果遇到任何意外问题我们会随时提供技术支持.</p>
                </div>
              </div>
            </div>

            <div className="skill container-fluid mt-5">
              <div className="row align-items-center">
                <div className="skill__cover col-lg-5 col-md-6">
                  <img src={skillImg} alt="" className="w-100 shadow" />
                </div>
                <div className="col-lg-7 col-md-6 mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                  <h4>技术范围</h4>
                  <p className="text-secondary skill__description">下面允许我们自豪的介绍一下我们所熟悉的技术栈, 专业的技术为您提供专业的服务</p>
                  <div className="accordion" id="skill">
                    <div className="card shadow">
                      <a href="#bootstrap" className="skill__title" data-toggle="collapse">
                      <div className="card-header">
                        Bootstrap
                      </div>
                      </a>
                      <div id="bootstrap" data-parent="#skill" className="collapse show">
                        <div className="card-body">
                          Bootstrp是世界上最受欢迎的前端组件库，在网络上构建响应式，移动优先的项目。它也是我们最基础的UI库
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#sass" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        React
                      </div>
                      </a>
                      <div id="sass" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          React是用于构建用户界面的JavaScript库，我们使用它来构建最现代化的前端组件。
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#redux" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Redux
                      </div>
                      </a>
                      <div id="redux" data-parent="#skill" className="collapse">
                        <div className="card-body">
                        Redux是JavaScript状态容器，提供可预测化的状态管理。我们使用它来管理应用程序中所有的状态
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#webpack" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Webpack
                      </div>
                      </a>
                      <div id="webpack" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          webpack是一个现代JavaScript应用程序的静态模块打包器(module bundler)，我们使用它来打包应用程序。
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#nodejs" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Node.js
                      </div>
                      </a>
                      <div id="nodejs" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          Node.js是基于Chrome V8 JavaScript引擎构建的JavaScript运行时，我们会使用它来开发后端程序以及一些CLI工具。
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#rails" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Ruby on Rails
                      </div>
                      </a>
                      <div id="rails" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          Rails是一个基于Ruby的Web应用程序框架，使用它可以让我们可以快速搭建出功能完备的MVC程序。
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#database" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Database
                      </div>
                      </a>
                      <div id="database" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          数据库我们在大多数情况下会选择MongoDB、PostgreSQL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SplitShap className="extension__split" />
      <div className="extension">
        <div className="container">
          <section className="section">
            <h4 className="text-center">技术与服务</h4>
            <p className="extension__desciption text-center mt-4 text-secondary">一旦您选择我们, 将会真真切切的为您提供如下的技术与服务. 有些服务可能您能切实的体会到, 但是有些可能会在幕后为你提供服务不那么容易察觉. </p>
            <div className="mt-5 row">
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-comments-smiley"></i>
                  <h4>方案定制</h4>
                  <p className="text-secondary">我们将会与您一起沟通共同确定产品功能和原型输出</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-ruler-pencil"></i>
                  <h4>界面设计</h4>
                  <p className="text-secondary">根据您的需求或产品形态, 设计出符合产品的UI视觉</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-hummer"></i>
                  <h4>制作开发</h4>
                  <p className="text-secondary">进行程序的开发. 其中包括(前台、后台、数据库、框架)等一些列的开发</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-bolt"></i>
                  <h4>项目测试</h4>
                  <p className="text-secondary">
                    软件交付前进行全面的功能和性能测试, 保证软件的交付质量
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-infinite"></i>
                  <h4>工作流程</h4>
                  <p className="text-secondary">通过在线协作软件与项目管理软件实时沟通项目进度以及项目成果</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-shine"></i>
                  <h4>SEO优化</h4>
                  <p className="text-secondary">分析定制Keyword、Meta、出站连接、接入监控平台以及更多的Technical SEO</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-settings"></i>
                  <h4>部署维护</h4>
                  <p className="text-secondary">将为您提供永久免费的故障, 包括服务器问题、数据库问题以及部署方面的问题</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="extension__item text-center">
                  <i className="ti-stats-up"></i>
                  <h4>共同成长</h4>
                  <p className="text-secondary">将为您提供永久免费的故障, 包括服务器问题、数据库问题以及部署方面的问题</p>
                </div>
              </div>
            </div>

            <div className="extension__contact shadow bg-white rounded p-5">
              <div className="row">
                <div className="col-sm-7">
                  <h5>准备开始启动您的项目了吗？</h5>
                  <p className="text-secondary mt-3 pr-4">欢迎向我们咨询创建一个Web项目的任何问题, 非常高兴我们的专业能力能够陪同您一起前行.</p>
                </div>
                <div className="col-sm-5 mt-4 mt-sm-0 align-self-center text-center">
                  <a href="/contact" className="btn btn-outline-green">
                    <i className="ti-email mr-2"></i>
                    联系我们
                  </a>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9 text-center">
                <div className="customer owl-carousel owl-theme">
                  <div className="customer__view text-center">
                    <p className="text-secondary font-italic mb-0">"I'll definitely add a link to this Chinese version in the main readme with credit going to you. Thanks again!!"</p>
                    <div className="customer__info">
                      <img className="rounded-circle mt-3 mb-3" src={covert1} alt=
                      "" />
                      <h6 className="mb-1">Travis Fischer</h6>
                      <p className="text-secondary mb-0">Github</p>
                    </div>
                  </div>

                  <div className="customer__view text-center">
                    <p className="text-secondary font-italic mb-0">"CREATETHINK提供了非常专业的技术服务，只需要提出需求他们会给出专业的建议和定制化的程序开发"</p>
                    <div className="customer__info">
                      <img className="rounded-circle mt-3 mb-3" src={avatar} alt=
                      "" />
                      <h6 className="mb-1">CREATETHINK</h6>
                      <p className="text-secondary mb-0">Github</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SplitShap className="text-white" />
      <div className="container latest-blog">
        <section className="section">
          <h4 className="text-center">最近博客</h4>
          <p className="latest-blog__description mt-4 text-center text-secondary">阅读有关我们最新的技术文章和新闻</p>
          <div className="row mt-5">
            {
              blogs.map(blog => <BlogCard key={blog.node.id} blog={blog} />)
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;
