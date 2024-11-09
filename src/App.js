
import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import About from "./pages/About.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Blog from "./pages/Blog.jsx";
import Edit from "./pages/Edit.jsx";
import Success from "./pages/Success.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";

function App() {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(user => user.isLogin);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to={`/`} />} />
      <Route path="/signup" element={!user ? <Signup /> : <Navigate to={`/`} />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={user ? <Blogs /> : <Navigate to={`/login`} />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/edit/:id" element={user ? <Edit /> : <Navigate to={`/login`}/>} />
      <Route path="/user/:id" element={user ? <ProfileEdit /> : <Navigate to={`/login`}/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sucess" element={<Success />} />
      <Route path="/profile" element={user ? <Profile /> : <Navigate to={`/login`}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
