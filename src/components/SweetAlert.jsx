import React from "react";
import Swal from "sweetalert2";
function SweetAlert(props) {
  function SwalOpen() {
    Swal.fire({
      ...props
    });
  }
  return (
    <>
      {props.children}
      {console.log(props)}
    </>
  );
}

export default SweetAlert;
