import "./Questions.css";
import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.min.js"; // Import Bootstrap JavaScript
import emailjs from "emailjs-com";

const Questions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const textarea = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      from_name: name,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_QUESTIONS_TEMPLATE_ID,
        {
          to_name: process.env.REACT_APP_EMAIL_RECEIVER_NAME,
          from_name: `${name}`,
          message: `
          Email: ${email}
          Message: ${message}
        `,
        },
        process.env.REACT_APP_EMAIL_USER_ID
      )

      .then(
        () => {
          alert("Your message has been sent!");
          window.location.reload(false);
          e.target.reset();
        },

        () => {
          alert("Message failed to send!, please try again");
        }
      );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 380) {
        textarea.current.rows = 1;
      } else if(window.innerWidth <= 600) {
        textarea.current.rows = 5;
      } else if (window.innerWidth == 914) {
        textarea.current.rows = 1;
      } else if (window.innerWidth == 1024){
        textarea.current.rows = 5
      } else if(window.innerWidth <= 1200) {
        textarea.current.rows = 10;
      } else {
        textarea.current.rows = 4;
      }
    };

    handleResize(); // Set initial rows based on window size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className="questions-page-wrapper d-flex justify-content-center align-items-center">
      <div className="questions">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <h1 className="question-header">Have a Question?</h1>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="questionTextArea"
              rows="4"
              placeholder="Ask your question here"
              onChange={handleMessageChange}
              ref={textarea}
            ></textarea>
          </div>
          <div className="button-wrapper">
            <button type="submit" className="btn btn-primary mb-3 btn-custom">
              Click to Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questions;


