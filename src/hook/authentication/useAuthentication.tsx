import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  /**
   * 
   */
  const [error, setError] = useState(null);

  /**
   * 
   */
  const [loading, setLoading] = useState(false);

  /**
   * Cleanup
   * Deal with memory leak
   */
  const [canceled, setCanceled] = useState(false);

  /**
   * 
   */
  const auth = getAuth();

  /**
   * Check cleanup
   * @returns 
   */
  function checkIfIsCanceled() {
    if (canceled) {
      return;
    }
  }

  /**
   * 
   * @param data 
   */
  const createUser = async (data: any) => {
    checkIfIsCanceled();
    setLoading(true);

    try {
      const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, {displayName: data.name});
      return user;
    } catch (error: any) {
      console.log(error.message);
      console.log(typeof error.message);
    }
  }
}