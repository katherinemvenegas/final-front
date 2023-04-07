import { useContext } from "react";
import ContactForm from "../Components/ContactForm";
import ThemeContext from "../context";

const Contact = ({ children }) => {
  const {theme} = useContext(ThemeContext);
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
