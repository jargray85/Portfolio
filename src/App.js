import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";

function App() {
  // URL should have HEROKU URL for your backend, or localhost:4000 for development
  const URL = "http://localhost:4000"

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