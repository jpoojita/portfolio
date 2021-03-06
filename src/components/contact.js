import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
        </div>
      </div>
      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>

          <h5>Where to find me</h5>

          <p>
            Jacksonville, Florida
            <br />
            32246
          </p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>

          <h5>Email Me At</h5>

          <p>jpoojita@outlook.com</p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>

          <h5>Call Me At</h5>

          <p>Mobile: +1 (331) 305-4551</p>
        </div>
      </div>
    </section>
  );
}
