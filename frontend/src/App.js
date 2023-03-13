import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Admin from "./page/Admin";
import Create from "./page/Create";
import "./resources/scss/app.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/stored/books" element={<Admin />} />
          <Route path="/admin/create/book" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
