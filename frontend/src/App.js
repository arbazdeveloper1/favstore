import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing_page from "./landing_page/Landing_page";
import SignUp from "./signUp/Signup";
import AddBlog from "./blog/blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/addBlog" element={<AddBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
