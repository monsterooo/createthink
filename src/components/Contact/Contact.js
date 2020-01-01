import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SplitShap from '../SplitShap/SplitShap';

function ContactPage() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState({
    name: '',
    email: '',
    title: '',
    content: ''
  })
  const handleChange = key => e => {
    setSubmit({...submit, [key]: e.target.value});
  }
  const sendMessage = () => {
    console.log('ep > ', process.env.ENDPOINT);
    console.log(submit)
    const formData = new FormData();
    // Object.keys(submit).forEach(v => {
    //   formData.set(v, submit[v]);
    // })
    formData.set('data', JSON.stringify(submit))
    axios({
      method: 'post',
      url: `${process.env.ENDPOINT}/contacts`,
      data: formData
    }).then(res => {
      if (_.get(res, 'status') === 200) {
        setShow(true);
        setType('success');
        setMessage('您的消息已成功发送，我们会尽快与您取得联系。');
      }
    }).catch(e => {
      setShow(true);
      setType('info');
      setMessage('发送消息失败，请稍后再试。');
    })
  }
  return (
    <>
      <SplitShap className="text-white" />
      <div className="container latest-blog">
        <section className="section">
          <h4 className="text-center">联系我们</h4>
          <p className="mt-4 text-center text-secondary">您想要创建自己的网站或小程序吗？欢迎与我们取得联系，会为您提供咨询。</p>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-4 pt-2">
              {
                show ? (
                  <div class={`alert alert-${type} fade show`} role="alert">
                    {message}
                    <button onClick={() => setShow(false)} type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                ) : null
              }
              <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>姓名 :</label>
                      <input onChange={handleChange('name')} value={submit.name} name="name" id="name" type="text" className="form-control" placeholder="请输入您的姓名" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>邮箱 :</label>
                      <input onChange={handleChange('email')} value={submit.email} name="email" id="email" type="email" className="form-control" placeholder="请输入您的邮箱" />
                    </div> 
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>标题 :</label>
                      <input onChange={handleChange('title')} value={submit.title} name="title" id="title" className="form-control" placeholder="请输入一个标题" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>你的需求 :</label>
                      <textarea onChange={handleChange('content')} value={submit.content} name="content" id="content" rows="4" className="form-control" placeholder="请输入您的需求内容"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <a onClick={sendMessage} className="submitBnt btn btn-green text-white">发送消息</a>
                    <div id="simple-msg"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage;
