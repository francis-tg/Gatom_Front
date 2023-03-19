import React from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import BackBtn from "../components/BackBtn.jsx";
import Loading from "../components/Loading.jsx";
import NumKeyBoard from "../components/NumKeyBoard.jsx";
function Montant() {
  const [keyValue, setKeyValue] = React.useState("");
  const [isLoad, setLoading] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {}, []);
  function validation() {
    const regx = /^[0-9]{3,5}$/;
    return !regx.test(keyValue);
  }
  function Continue() {
    setLoading(true);
    /*
    Function to check account
    */
    setTimeout(() => {
      navigate("/service/transfert");
    }, 3000);
  }
  return (
    <div className='container p-3 custom-bg-tgcel'>
      <BackBtn
        onClick={() => {
          navigate("/service");
        }}
      />
      {isLoad && <Loading />}
      <div className='item-header '>
        <h3>Transfert de crédit / Dépôt Tmoney</h3>
        <h3>Entrer le montant</h3>
      </div>
      <div className='screen-container'>
        <div className='screen'>{keyValue ? keyValue : 0} F</div>
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

export default Montant;
