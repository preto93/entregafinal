import React from "react";
import Form from "../Components/Form";
import { useDentistStates } from "../components/utills/context";

const Contact = () => {
  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? "App contact" : "dark contact"}>
      <h2>Querés saber más de nuestros profesionales?</h2>
      <p>Contactanos</p>
      <Form />
    </div>
  );
};

export default Contact;