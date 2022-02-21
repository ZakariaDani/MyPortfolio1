import react from "react";
import emailjs from "emailjs-com";
import "./Contacts.css";

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vv2kjlg",
        "template_5otsvo5",
        e.target,
        "user_TGO8LuzN2nq1EoX5pkLUU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contacts">
      <form id="formEmail" onSubmit={sendEmail}>
        <input
          className="inputField"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="inputField"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="inputField"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea id="msg" placeholder="Your message" name="message" required></textarea>
        <input id="submit" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contacts;
