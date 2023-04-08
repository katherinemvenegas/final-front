import { useContext } from "react";
import ContactForm from "../Components/ContactForm";
import { GlobalContext } from "../context";

const Contact = ({ children }) => {
  const {stateTheme} = useContext(GlobalContext);
  return (
    <>
      <div style={{  background: stateTheme.background, color: stateTheme.font}}>
        {children}
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
