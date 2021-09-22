import React, { useRef, useState } from 'react';
import './Contacts.scss';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const subjectInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const messageInputRef = useRef();

  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const serviceID = 'service_ID';
  const templateID = 'template_v2m5in8';
  const userID = 'user_8UV0ZZCVKlc0x9cEee30f';

  const sendEmailHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        setSuccessMessage('Message successfully sent.');
      })
      .catch((error) => {
        console.error(`Something went wrong: ${error}`);
        setIsLoading(false);
      });
    subjectInputRef.current.value = '';
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
    messageInputRef.current.value = '';
  };

  return (
    <div id="contacts" className="contact-wrapper">
      <div className="container ">
        <div className="row text-center">
          <h1>Contact Me</h1>
          {isSent && !isLoading ? (
            <span className="success-message">{successMessage}</span>
          ) : (
            <span className="default-message">Enter Your Messsage Here:</span>
          )}
        </div>
        <form onSubmit={sendEmailHandler} autoComplete="off">
          <div className="row mx-4">
            <div className="col-md-6 col-xs-12 ">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                ref={subjectInputRef}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref={nameInputRef}
                required
              />

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                ref={emailInputRef}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number (Optional) "
                name="phone"
                ref={phoneInputRef}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                required
                className="form-control"
                placeholder="Your message"
                name="message"
                ref={messageInputRef}
              ></textarea>
              {!isLoading ? (
                <button
                  className="btn btn-primary btn-contact my-3"
                  type="submit"
                >
                  Contact Me
                </button>
              ) : (
                <button
                  class="btn btn-primary btn-loading my-3"
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span> Loading...</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
