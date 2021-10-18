import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
  //Definir un estado
  const [login, setLogin] = useState(null);
  useEffect(() => {
    // Autenticar
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  if (login === null) {
    return <Loading isVisble={true} text="Cargando..." />;
  }

  if (login) {
    return <UserLogged />;
  }
  return <UserGuest />;
}
