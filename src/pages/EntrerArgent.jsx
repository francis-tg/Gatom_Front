import React from "react";

function EntrerArgent() {
  return (
    <div className='container p-3'>
      <div className='alert alert-info text-center'>
        <h2>Transfert de 200 F sur le numéro 91595914</h2>
        <strong>Veuillez entrer l'argent</strong>
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
          className='btn btn-danger btn-lg '
          style={{width: 200, height: 100}}>
          Annuler
        </button>
        <button
          className='btn btn-success btn-lg'
          style={{width: 200, height: 100}}>
          Continuer
        </button>
      </div>
    </div>
  );
}

export default EntrerArgent;
