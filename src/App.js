import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Header, Footer, Login } from "./components/";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
