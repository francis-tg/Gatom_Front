import React from "react";
import {useNavigate} from "react-router-dom";
import Loading from "../components/Loading";
import SendLoading from "../components/sendLoading";
import Swal from "sweetalert2";
function Confirm() {
  const navigate = useNavigate();
  const [isLoad, setLoading] = React.useState(false);
  const [isSending, setSending] = React.useState(false);
  function cancel() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  }
  function confirm() {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      openSwal();
    }, 5000);
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
      reverseButtons: true
    }).then((r) => {
      if (r.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Swal.fire("Reçu imprimée", "Retirer votre reçu...", "success");
        }, 3000);
      }
      if (r.isDismissed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2500);
      }
    });
  }
  return (
    <div className='container  py-5'>
      {isLoad && <Loading />}
      {isSending && <SendLoading />}

      <div className='alert alert-info text-center'>
        <h1>
          Vous avez demandé un transfert de{" "}
          <span className='text-danger'>200 F</span> sur le numero{" "}
          <span className='text-danger'>91595914</span>
        </h1>
      </div>
      <div className='d-flex gap-3'>
        <button className='btn btn-danger btn-lg w-100 ' onClick={cancel}>
          Annuler
        </button>
        <button className='btn btn-success btn-lg w-100' onClick={confirm}>
          Confirmer
        </button>
      </div>
    </div>
  );
}

export default Confirm;
