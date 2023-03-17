import React from "react";
import {useNavigate} from "react-router-dom";
import NumKeyBoard from "../../components/NumKeyBoard";
import Loading from "../../components/Loading";
import {tgcelValidNumber} from "../../lib/validation";
import BackBtn from "../../components/BackBtn";

function Transfert() {
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
      navigate("/put-money");
    }, 3000);
  }
  return (
    <div className='container p-3'>
      {isLoad && <Loading />}
      <BackBtn
        onClick={() => {
          navigate("/montant");
        }}
      />
      <h2 className='text-center'>Entrer votre numéro</h2>
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
        setDisable={tgcelValidNumber(keyValue)}
        valideCaption='Continuer'
        continueAction={Continue}></NumKeyBoard>
    </div>
  );
}

export default Transfert;
