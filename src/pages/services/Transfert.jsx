import React from "react";
import {useNavigate} from "react-router-dom";
import Keyboard from "../../components/Keyboard";
import Loading from "../../components/Loading";
import {tgcelValidNumber} from "../../lib/validation";

function Transfert() {
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
      navigate("/confirm");
    }, 3000);
  }
  return (
    <div className='container p-3'>
      {isLoad && <Loading />}
      <h2 className='text-center'>Entrer votre numero </h2>
      <div className='screen'>{keyValue ? keyValue : 0} </div>
      <Keyboard
        value={setKeyValue}
        valideCaption='Continuer'
        valideAction={Continue}
        valideDisable={tgcelValidNumber(keyValue)}
      />
    </div>
  );
}

export default Transfert;
