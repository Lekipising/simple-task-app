import { toast } from "react-toastify";

export default ({ status, message }) =>
  toast(message, {
    type: status || "success",
    autoClose: 2000,
    closeOnClick: true,
  });
