import { useContext } from "react";
import ContactForm from "../Components/ContactForm";
import GlobalContext from "../context";

const Contact = ({ children }) => {
  const {theme} = useContext(GlobalContext);
  return (
    <>
      <div style={{ background: theme.background, color: theme.font }}>
        {children}
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
