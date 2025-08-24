import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ExplorePage from "./Pages/ExplorePage";
import BlogPage from "./Pages/BlogPage";
import NavBar from "./components/NavBar";
import { Toaster } from "sonner";
import ProfilePage from "./Pages/ProfilePage";
import EditBlogPage from "./Pages/EditBlogPage";

function Layout() {
  const location = useLocation();
  const { pathname } = location;
  const noNavPaths = ["/signup", "/login","/profile"];
  return (
    <>
      <header>{!noNavPaths.includes(pathname) && <NavBar />}</header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit" element={<EditBlogPage />} />
        
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
      <Toaster richColors position="top-right" expand={true} />
    </Router>
  );
}

export default App;
