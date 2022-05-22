import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Blogs from './Pages/Home/Blogs/Blogs';
import Navbar from './Pages/Home/Header/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
