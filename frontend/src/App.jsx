import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ExplorePage from "./Pages/ExplorePage";
import BlogPage from "./Pages/BlogPage";
import NavBar from "./components/NavBar";
import { Toaster, toast } from "sonner";
function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path={"/blog"} element={<BlogPage />} />
        </Routes>
      </Router>
      <Toaster richColors position="top-right"/>
    </>
  );
}

export default App;
