import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Pages/Main";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Recover from "./Components/Pages/Recover";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/create" element={<Register />} />
        <Route path="/account/recoverpassword" element={<Recover />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
