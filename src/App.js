import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
// import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://james-gray-portfolio-e06bd198346a.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home URL={URL}/>}/>
      </Routes>
    </div>
  )
}

export default App