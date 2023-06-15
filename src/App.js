import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage";
import { RegisterPage } from "./pages/registerPage";
import { ProfilePage } from "./pages/profilePage";
import { Header } from "./header/header";
import { AddNewPage } from "./pages/news";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/news" element={<AddNewPage />} />
      </Routes>
    </div>
  );
}

export default App;
