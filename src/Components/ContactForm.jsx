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
    if(isValidName && isValidEmail){
      setShowCardSuccess(true);
      setError("");
    }else{
      setError("Por favor verifique su información nuevamente")
      setShowCardSuccess(false)
    }
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
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
        {showCardSuccess ? <CardSuccess name = {name}/> : null}
      </div>
    </>
  );
};

export default ContactForm;
