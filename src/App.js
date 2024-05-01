import './App.css';
import {BrowserRouter, Navigate} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import Home from './Componenets/Home';
import Login from './Componenets/Login';
import Signup from './Componenets/Signup';
import Userdetail from './Componenets/Userdetail';
import Navbar from './Componenets/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Userdetail' element={<Userdetail/>}/>
    <Route path='/*' element={<Navigate to="/" />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
