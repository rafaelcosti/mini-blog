import UserRegisteRequest from "../../interfaces/user/UserRegisteRequest";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../../firebase/config";

export const useAuthentication = () => {
  /**
   * 
   */
  const [error, setError] = useState("");

  /**
   * 
   */
  const [loading, setLoading] = useState(false);

  /**
   * Cleanup
   * Deal with memory leak
   */
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth(app);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data: UserRegisteRequest) => {
    checkIfIsCancelled();
    setLoading(true);

    try {
      debugger;
      const { user } = await createUserWithEmailAndPassword(auth, data.eMail, data.password);
      await updateProfile(user, { displayName: data.name });

      setLoading(false);
      return user;
    } catch (error: any) {
      let systemErrorMessage;
      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = () => {
    debugger;
    checkIfIsCancelled();
    signOut(auth);
    console.log(auth);
  };

  const login = async (data: UserRegisteRequest) => {
    checkIfIsCancelled();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.eMail, data.password);
    } catch (error: any) {
      console.log(error.message);
      console.log(typeof error.message);
      console.log(error.message.includes("user-not"));

      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      console.log(systemErrorMessage);

      setError(systemErrorMessage);
    }

    console.log(error);

    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, logout, login, loading, };
};