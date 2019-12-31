import React from 'react';
import SplitShap from '../SplitShap/SplitShap';

function ContactPage() {
  return (
    <>
      <SplitShap className="text-white" />
      <div className="container latest-blog">
        <section className="section">
          <h4 className="text-center">Contact</h4>
          <p className="mt-4 text-center text-secondary">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
          <div className="row justify-content-center">
            <div className="col-md-8 mt-4 pt-2">
              <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Your Name<span className="text-danger">*</span> :</label>
                      <input name="name" id="name" type="text" className="form-control" placeholder="First Name :" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Your Email<span className="text-danger">*</span> :</label>
                      <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                    </div> 
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Subject :</label>
                      <input name="subject" id="subject" className="form-control" placeholder="Your subject :" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Comments :</label>
                      <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-green text-white" value="Send Message" />
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
