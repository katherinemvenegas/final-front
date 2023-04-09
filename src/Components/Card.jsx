import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";
import styles from "./Card.module.css";

const Card = () => {

  const { dentists, dispatchFav, isFav, dispatchIsFav } = useContext(GlobalContext);

  function toggleFav(dentist) {
    const thisFav = isFav[dentist.id];

    dispatchFav({
      type: thisFav ? "remove" : "add",
      payload: {
        dentist
      }
    })

    dispatchIsFav(
      {
        type: thisFav ? 'remove' : 'add',
        payload: { dentist }
      });
  }

  return (
    <>
      {dentists.length && dentists.map((dentist) => (
        <div className={`card`} key={dentist.id}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody}`}>
            <Link to={`/detail/${dentist.id}`}>
              <h5 className={`card-title ${styles.title}`}>{dentist.name}</h5>
            </Link>
            <a onClick={() => toggleFav(dentist)}>
              {isFav[dentist.id] ? <p>❤️</p> : <p>🤍</p>}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
