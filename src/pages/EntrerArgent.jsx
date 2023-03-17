import React from "react";
import {useNavigate} from "react-router-dom";
import Loading from "../components/Loading";

function EntrerArgent() {
  const navigate = useNavigate();
  const [isLoad, setLoading] = React.useState(false);
  return (
    <div className='container p-3'>
      {isLoad && <Loading />}
      <div className='alert alert-info text-center'>
        <h2>Transfert de 200 F sur le numéro 91595914</h2>
        <h3>
          <strong>Veuillez entrer l'argent</strong>
        </h3>
      </div>
      <div className='screen-container mt-5'>
        <div className='screen'>0 F</div>
      </div>
      <h4 className='text-center'>
        NB:{" "}
        <span className='text-danger'>
          Impossible de recupérer l'argent ou annuler une fois l'argent inséré
        </span>
      </h4>
      <div className='d-flex justify-content-center align-item-center gap-5 mt-5'>
        <button
          onClick={() => {
            navigate("/");
          }}
          className='btn btn-danger btn-lg '
          style={{width: 250, height: 130}}>
          Annuler
        </button>
        <button
          className='btn btn-success btn-lg'
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigate("/confirm");
            }, 4000);
          }}
          style={{width: 250, height: 130}}>
          Continuer
        </button>
      </div>
    </div>
  );
}

export default EntrerArgent;
