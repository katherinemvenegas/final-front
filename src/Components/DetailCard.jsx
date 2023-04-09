import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCard = () => {

  const url = 'https://jsonplaceholder.typicode.com/users';

  const [dentist, setDentist] = useState(undefined);
  const params = useParams();

  const idDentist = params.id

  const getDentist = async () => {
    const response = await fetch(url + `/${idDentist}`);
    const data = await response.json();
    setDentist(data)
  }

  useEffect(() => {
    getDentist();
  }, [params])


  return (
    <>
      <h1>Detail about Dentist </h1>
      <section className="card col-sm-12 col-lg-6 container">
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
              <li className="list-group-item">Name: {dentist?.name}</li>
              <li className="list-group-item">
                Last name: {dentist?.username}
              </li>
              <li className="list-group-item">
                Email: {dentist?.email}
              </li>
              <li className="list-group-item">
                Phone: {dentist?.phone}
              </li>
              <li className="list-group-item">
                Website: {dentist?.website}
              </li>
            </ul>
            <div className="text-center">
            </div>
          </div>
        </div>      
      </section>
    </>
  );
};

export default DetailCard;
