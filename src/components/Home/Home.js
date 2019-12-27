import React from "react";
import SplitShap from '../SplitShap/SplitShap';
import skillImg from './assets/service-left.jpg';
import './home.scss';

function Home() {
  return (
    <>
      <SplitShap>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
        </svg>
      </SplitShap>
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
                      <div class="card-header">
                        Bootstrap
                      </div>
                      </a>
                      <div id="bootstrap" data-parent="#skill" className="collapse show">
                        <div class="card-body">
                          bootstrap one
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#sass" className="skill__title collapsed" data-toggle="collapse">
                      <div class="card-header">
                        Sass
                      </div>
                      </a>
                      <div id="sass" data-parent="#skill" className="collapse">
                        <div class="card-body">
                          sass one
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#styled" className="skill__title collapsed" data-toggle="collapse">
                      <div class="card-header">
                        Styled-Component
                      </div>
                      </a>
                      <div id="styled" data-parent="#skill" className="collapse">
                        <div class="card-body">
                          styled-component one
                        </div>
                      </div>
                    </div>
                    <div className="card shadow">
                      <a href="#redux" className="skill__title collapsed" data-toggle="collapse">
                      <div class="card-header">
                        Redux
                      </div>
                      </a>
                      <div id="redux" data-parent="#skill" className="collapse">
                        <div class="card-body">
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
      <section className="section">
        tools
      </section>
    </>
  )
}

export default Home;
