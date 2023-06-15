import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase/auth";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ id: user.uid, email: user.email, name: user.displayName, photoURL: user.photoURL });
      } else {
        setUser(null);
      }
    });

    return () => checkUser();
  }, [setUser, auth, navigate]);

  const value = useMemo(() => {
    return {
      user,
      setUser,
      auth,
      storage,
      db
    };
  }, [user, setUser, auth, storage, db]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
