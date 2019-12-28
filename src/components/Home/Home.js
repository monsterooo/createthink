import React, { useEffect } from "react";
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import SplitShap from '../SplitShap/SplitShap';
import skillImg from './assets/service-left.jpg';
import covert1 from './assets/covert1.jpeg';
import './home.scss';

function Home() {
  useEffect(() => {
    $('.customer').owlCarousel({
      items: 1,
      loop:true,
      nav:true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
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
              <div className="row text-center">
                <div className="col">
                  <i className="ti-comments-smiley"></i>
                  <h4 className="mt-2">
                    沟通&方案
                  </h4>
                  <p>在第一个阶段, 我们会与您沟通和了解您的实际情况. 然后根据实际情况制定出最优的解决方案.</p>
                </div>
                <div className="col">
                  <i className="ti-ruler-pencil"></i>
                  <h4 className="mt-2">
                    原型&设计
                  </h4>
                  <p>在第二个阶段, 我们会给出设计原型图与您确认. 如果方案确定我们将会进入设计阶段, 设计完成我们会与您再次确认.</p>
                </div>
                <div className="col">
                  <i className="ti-hummer"></i>
                  <h4 className="mt-2">
                    制作&开发
                  </h4>
                  <p>在第三个阶段, 我们会根据设计图进行程序的开发. 其中包括(前台、后台、数据库、框架)等一些列的开发, 其中我们会通过实时协作软件与您同步项目进度.</p>
                </div>
                <div className="col">
                  <i className="ti-link"></i>
                  <h4 className="mt-2">
                    交付&维护
                  </h4>
                  <p>在第四个阶段, 我们会为您部署项目与使用教学. 之后如果遇到任何意外问题我们会随时提供技术支持.</p>
                </div>
              </div>
            </div>

            <div className="skill container-fluid">
              <div className="row">
                <div className="skill__cover col">
                  <img src={skillImg} alt="" className="w-100 shadow" />
                </div>
                <div className="col">
                  <h4>Build beautiful & modular websites</h4>
                  <p>Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                  <div className="accordion" id="skill">
                    <div className="card shadow">
                      <a href="#bootstrap" className="skill__title" data-toggle="collapse">
                      <div className="card-header">
                        Bootstrap
                      </div>
                      </a>
                      <div id="bootstrap" data-parent="#skill" className="collapse show">
                        <div className="card-body">
                          bootstrap one
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#sass" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Sass
                      </div>
                      </a>
                      <div id="sass" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          sass one
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#styled" className="skill__title collapsed" data-toggle="collapse">
                      <div className="card-header">
                        Styled-Component
                      </div>
                      </a>
                      <div id="styled" data-parent="#skill" className="collapse">
                        <div className="card-body">
                          styled-component one
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
                          redux one
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
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-comments-smiley"></i>
                  <h4>方案定制</h4>
                  <p className="text-secondary">我们将会与您一起沟通共同确定产品功能和原型输出</p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-ruler-pencil"></i>
                  <h4>界面设计</h4>
                  <p className="text-secondary">根据您的需求或产品形态, 设计出符合产品的UI视觉</p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-hummer"></i>
                  <h4>制作开发</h4>
                  <p className="text-secondary">进行程序的开发. 其中包括(前台、后台、数据库、框架)等一些列的开发</p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-bolt"></i>
                  <h4>项目测试</h4>
                  <p className="text-secondary">
                    软件交付前进行全面的功能和性能测试, 保证软件的交付质量
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-infinite"></i>
                  <h4>工作流程</h4>
                  <p className="text-secondary">通过在线协作软件与项目管理软件实时沟通项目进度以及项目成果</p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-shine"></i>
                  <h4>SEO优化</h4>
                  <p className="text-secondary">分析定制Keyword、Meta、出站连接、接入监控平台以及更多的Technical SEO</p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-settings"></i>
                  <h4>部署维护</h4>
                  <p className="text-secondary">将为您提供永久免费的故障, 包括服务器问题、数据库问题以及部署方面的问题</p>
                </div>
              </div>
              <div className="col-3">
                <div className="extension__item text-center">
                  <i className="ti-stats-up"></i>
                  <h4>共同成长</h4>
                  <p className="text-secondary">将为您提供永久免费的故障, 包括服务器问题、数据库问题以及部署方面的问题</p>
                </div>
              </div>
            </div>

            <div className="extension__contact shadow bg-white rounded p-5 mt-5">
              ewfewfwe
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9 text-center">
                <div className="customer owl-carousel owl-theme">
                  <div className="customer__view text-center">
                    <p className="text-secondary">"I'll definitely add a link to this Chinese version in the main readme with credit going to you. Thanks again!!"</p>
                    <div className="customer__info">
                      <img src={covert1} alt=
                      "" />
                      <h6>Travis Fischer</h6>
                      <p>Github</p>
                    </div>
                  </div>
                  <div className="customer__view"> Your Content </div>
                  <div className="customer__view"> Your Content </div>
                  <div className="customer__view"> Your Content </div>
                  <div className="customer__view"> Your Content </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home;
