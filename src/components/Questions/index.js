import './Questions.css';
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from'emailjs-com'

const Questions = () => {
    console.log(process.env)

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    const form = useRef()


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
          from_name: name
        }

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
        `},
            process.env.REACT_APP_EMAIL_USER_ID
          )

          .then(
            () => {
              alert("Message successfully sent!");
              window.location.reload(false);
              e.target.reset()
            },

            () => {
              alert("Message failed to send!, please try again");
            }
          );
      };


    return (
        <div className="questions-page-wrapper d-flex justify-content-center align-items-center" >
        <div className="questions">
        <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
            <h1 className="question-header">Have a Question?</h1>
            </div>
            <div className="mb-3">

                <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                onChange={handleNameChange}
                />
            </div>
            <div class="mb-3">

                <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={handleEmailChange}
                />
            </div>
            <div class="mb-3">

                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Ask your question here" onChange={handleMessageChange}></textarea>
            </div>
            <div className="button-wrapper">
            <button type="submit" className="btn btn-primary mb-3 btn-custom">Click to Send</button>
            </div>
            </form>
        </div>
        </div>
    )
};


export default Questions;



// import './Questions.css';
// import { useRef, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import emailjs from'emailjs-com'

// const Questions = () => {

//     const[name, setName] = useState("");
//     const[email, setEmail] = useState("");
//     const[message, setMessage] = useState("");

//     const form = useRef()

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handleMessageChange = (e) => {
//         setMessage(e.target.value);
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.send(
//             "service_12nglom",
//             "quetsion_template",
//             {
//                 to_name: "Brittany",
//                 from_name: `${name}`,
//                 message: `
//                     Email: ${email}
//                     Message: ${message}
//                 `
//             },
//             "SPgqjzmczLnIw1q5P"
//         )
//         .then(
//             () => {
//                 alert("Message successfully sent!");
//                 window.location.reload(false);
//                 e.target.reset()
//             },
//         )
//             .catch((error) => {
//                 alert("Message failed to send!, please try again");
//             }
//         );
//     };

//     return (
//         <div className="questions-page-wrapper d-flex justify-content-center align-items-center" >
//             <div className="questions">
//                 <form ref={form} onSubmit={sendEmail}>
//                     <div className="mb-3">
//                         <h1 className="question-header">Have a Question?</h1>
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="exampleFormControlInput1"
//                             placeholder="Name"
//                             onChange={handleNameChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="exampleFormControlInput1"
//                             placeholder="name@example.com"
//                             onChange={handleEmailChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Ask your question here" onChange={handleMessageChange}></textarea>
//                     </div>
//                     <button type="submit" className="btn btn-primary mb-3 btn-custom">Click to Send</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Questions;
