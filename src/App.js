import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Reviews from './components/Home/Reviews/Reviews';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import Register from './components/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyProducts from './components/Dashboard/MyProducts';
import MyReview from './components/Dashboard/MyReview';
import Myhistory from './components/Dashboard/Myhistory';
import Users from './components/Dashboard/Users';
import RequireAdmin from './components/Login/RequireAdmin';
import NotFount from './components/NotFount';
import MyTools from './components/Home/MyTools/MyTools';



function App() {
  return (
    <div className=''>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>

        <Route path='myTools' element={
          <RequireAuth>
            <MyTools></MyTools>
          </RequireAuth>
        }></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProducts></MyProducts>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<Myhistory></Myhistory>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>

        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFount></NotFount>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;