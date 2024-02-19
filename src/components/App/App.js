import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Landing, Login, Cart, Fof } from "../../pages/Index";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import { useTheme } from "../../providers/ThemeProvider";
import Footer from "../Footer/Footer";
function App() {
  const { currentTheme } = useTheme();
  return (
    <div className={`App ${currentTheme ? "Dark" : "Light"}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
