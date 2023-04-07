import { useState } from "react";
import CardSuccess from "./CardSuccess";
import styles from "./Form.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showCardSuccess, setShowCardSuccess] = useState(false);
  const [error, setError] = useState("");

  const validRegex = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;
  const isValidName = name.length > 5;

  const isValidEmail = validRegex.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidName && isValidEmail) {
      setShowCardSuccess(true);
      setError("");
    } else {
      setError("Por favor verifique su información nuevamente")
      setShowCardSuccess(false)
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <>
      <div>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Name"
              name="name"
              value={name}
              required
              onChange={onNameChange}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              required
              onChange={onEmailChange}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
            <div>{error}</div>
          </form>
        </div>
        {showCardSuccess ? <CardSuccess name={name} /> : null}
      </div>
    </>
  );
};

export default ContactForm;
