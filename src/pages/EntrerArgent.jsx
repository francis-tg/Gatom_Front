import React from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import SendLoading from "../components/sendLoading";

function EntrerArgent() {
  const navigate = useNavigate();
  const [isLoad, setLoading] = React.useState(false);
  const [isSending, setSending] = React.useState(false);
  function goToConfirm() {
    Swal.fire({
      title: "Recapitulons...",
      /**
       *  Remplacer les XXXX par  leurs valeurs
       */
      html: "<p>Vous avez demandé <h5>un Transfert / Dépôt</h5> de <h5>XXXX F</h5> sur le compte <h5>XX XX XX XX</h5></p>",
      confirmButtonColor: "green",
      confirmButtonText: "Continuer"
    });
  }
  function cancel() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  }
  function openSwal() {
    Swal.fire({
      title: "Terminé ...",
      backdrop: false,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Terminer et imprimer le reçu",
      cancelButtonText: "Terminer et Fermer",
      confirmButtonColor: "#007bff",
      cancelButtonColor: "#393939",
      showCloseButton: false,
      reverseButtons: true,
      denyButtonText: "Prendre votre monnaie de 500f",
      showDenyButton: true
    }).then((r) => {
      /**
       *  Fonction pour terminer et imprimer le reçu
       */
      if (r.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Swal.fire("Reçu imprimée", "Retirer votre reçu...", "success").then(
            (s) => {
              s.isConfirmed && cancel();
            }
          );
        }, 3000);
      }
      /**
       *  Fonction pour terminer et Fermer
       */
      if (r.isDismissed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2500);
      }
      /**
       * fonction pour rendre la monnaie
       */
      if (r.isDenied) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Swal.fire({text: "Prennez votre monnaie...", backdrop: false}).then(
            (e) => {
              e.isConfirmed && navigate("/");
            }
          );
        }, 2000);
      }
    });
  }
  return (
    <div className='container p-3 custom-bg-tgcel'>
      {isLoad && <Loading />}
      {isSending && <SendLoading />}
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
            setSending(true);
            setTimeout(() => {
              setSending(false);
              openSwal();
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
