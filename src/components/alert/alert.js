import React from "react";
import Swal from "sweetalert2";

const alert = () => {
    const modalDelete = () => {
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Se eliminará de forma permanente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#92C149",
            cancelButtonColor: "#DF2626",
            denyButtonColor: "grey",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Registro eliminado!",
                    icon: "success",
                    confirmButtonColor: "#92C149",
                });
            }
        });
    };
    return <div>{modalDelete()}</div>;
};

export default alert;
