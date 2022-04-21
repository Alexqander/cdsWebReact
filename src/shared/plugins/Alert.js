import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alert = withReactContent(Swal);

export const msjConfirmacion =
  "Le solicitamos esperar un momento a que la solicitud termine.";
export const titleConfirmacion =
  "¿Está seguro de contiuar?";
export const msjExito =
  "La actividad solicitada, se ha realizado de manera exitosa.";
export const titleExito = "Proceso Exitoso";
export const msjError ="Ha ocurrido un error intente mas tarde.";
export const titleError = "Error al realizar la acción";

export default Alert;
