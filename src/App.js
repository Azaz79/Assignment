import logo from './logo.svg';
import './App.css';
import Exam from "./components/exam";
import Home from "./components/home";
import NavBar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exam" element={<Exam />} />
          </Routes>
          <Footer />
        </div>
      </Router>


    </>
  );
}

export default App;
