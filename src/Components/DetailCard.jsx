import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";

const DetailCard = () => {

  const [dentist, setDentist] = useState(undefined);
  const params = useParams();

  const idDentist = params.id

  const getDentist = async () =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/?id=${idDentist}`);
    const data = await response.json();
    setDentist(data[0])
  }

  useEffect(() => {
    getDentist();
  }, [params])

  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
          <div className={`card-body row`}>

          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {dentist?.name}</li>
              <li className="list-group-item">
                Apellido: {dentist?.username}
              </li>
              <li className="list-group-item">
                Email: {dentist?.email}
              </li>
              <li className="list-group-item">
                Teléfono: {dentist?.phone}
              </li>
              <li className="list-group-item">
                Website: {dentist?.website}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>      
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
