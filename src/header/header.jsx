import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const Header = () => {
  const { user, auth } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      {user ? (
        <button
          className="header-button"
          onClick={() => {
            signOut(auth);
            navigate("/login");
          }}
        >
          Выйти
        </button>
      ) : (
        <Link to="/login" className="header-items">
          Вход
        </Link>
      )}

      {user && (<Link to="/" className="header-items">
          Главная
        </Link>)}
        {user && (<Link to="/profile" className="header-items">
          Профиль
        </Link>)}
    </header>
  );
};
