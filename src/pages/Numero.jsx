import React from "react";
import {useNavigate} from "react-router-dom";
import NumKeyBoard from "../components/NumKeyBoard";
import Loading from "../components/Loading";
import {tgcelValidNumber} from "../lib/validation";
import BackBtn from "../components/BackBtn";
import Swal from "sweetalert2";
import tgcelLogo from "../img/Icone-Togocom@2x.png";
import {transactionReducer} from "../redux/features/transaction";

function Numero() {
  const [keyValue, setKeyValue] = React.useState("");
  const [isLoad, setLoading] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {}, []);
  function Continue() {
    setLoading(true);
    /*
    Function to check account
    */

    setTimeout(() => {
      navigate("/confirm");

      /* setLoading(false);
      goToConfirm(); */
      transactionReducer();
    }, 3000);
  }
  function validation() {
    if (tgcelValidNumber(keyValue) && keyValue.length >= 8) {
      Swal.fire({icon: "error", text: "Numéro incorrect..."});
      return tgcelValidNumber(keyValue);
    }
    return tgcelValidNumber(keyValue);
  }
  function goToConfirm() {
    Swal.fire({
      title: "Recapitulons...",
      html: "<p>Vous avez demandé <h5>un Transfert / Dépôt</h5> de <h5>XXXX F</h5> sur le compte <h5>XX XX XX XX</h5></p>",
      confirmButtonColor: "green",
      confirmButtonText: "Continuer"
    });
  }
  return (
    <div className='container p-3 custom-bg-tgcel'>
      {isLoad && <Loading />}
      <BackBtn
        onClick={() => {
          navigate("/montant");
        }}
      />
      <div className='item-header'>
        <h3>Transfert de crédit / Dépôt Tmoney</h3>
        <h3>Entrer votre numéro</h3>
      </div>
      <div className='screen-container'>
        <div className='screen'>{keyValue}</div>
      </div>
      {/*  <Keyboard
        value={setKeyValue}
        valideCaption='Continuer'
        valideAction={Continue}
        valideDisable={validation()}
      /> */}

      <NumKeyBoard
        keyState={setKeyValue}
        setDisable={validation()}
        valideCaption='Continuer'
        continueAction={Continue}></NumKeyBoard>
    </div>
  );
}

export default Numero;
