import { store } from "react-notifications-component";

export const showNotification = (title, message = " ") => {
  store.addNotification({
    title: title,
    message: message,
    type: "success",
    insert: "top",
    container: "bottom-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      // onScreen: true,
    },
  });
};
