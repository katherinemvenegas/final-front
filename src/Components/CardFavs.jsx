import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";
import styles from "./Card.module.css";

const CardFavs = () => {

    const { stateFav } = useContext(GlobalContext);


    return (
        <>
            {stateFav.map((dentists) => (
                <div className={`card`} key={dentists.dentist.id}>
                    <img
                        className="card-img-top"
                        src="/images/doctor.jpg"
                        alt="doctor placeholder"
                    />
                    <div className={`card-body ${styles.CarBody}`}>
                        <Link to={`/detail/${dentists.dentist.id}`}>
                            <h5 className={`card-title ${styles.title}`}>{dentists.dentist.name}</h5>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardFavs;
