import React from 'react';
import './Contacts.scss';

const Contacts = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('SUBMITED');
  };

  return (
    <div id="contacts" className="contact-wrapper">
      <div className="container ">
        <div className="row text-center">
          <h1>Contact Me</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6 col-xs-12 ">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number (Optional) "
                name="name"
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                required
                className="form-control"
                placeholder="Your message"
                name="message"
              ></textarea>
              <button className="btn btn-primary my-3" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
