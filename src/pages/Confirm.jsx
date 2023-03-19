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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      goToConfirm();
    }, 5000);
  }

  function goToConfirm() {
    Swal.fire({
      title: "Recapitulons...",
      html: "<p>Vous avez demandé <h5>un Transfert / Dépôt</h5> de <h5>XXXX F</h5> sur le compte <h5>XX XX XX XX</h5></p>",
      confirmButtonColor: "green",
      confirmButtonText: "Continuer"
    }).then((r) => {
      r.isConfirmed && navigate("/put-money");
    });
  }
  return (
    <div className='container  py-5 custom-bg-tgcel'>
      {isLoad && <Loading />}
      {isSending && <SendLoading />}

      <div className='alert alert-info text-center'>
        <h1>
          Vous avez demandé un transfert de{" "}
          <span className='text-danger'>200 F</span> sur le numero{" "}
          <span className='text-danger'>91595914</span>
        </h1>
      </div>
      <div className='d-flex gap-5 mt-5'>
        <button
          className='btn btn-danger btn-lg w-50 '
          style={{height: 120}}
          onClick={cancel}>
          Annuler
        </button>
        <button className='btn btn-success btn-lg w-50' onClick={confirm}>
          Confirmer
        </button>
      </div>
    </div>
  );
}

export default Confirm;
