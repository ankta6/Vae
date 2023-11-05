import { React } from 'react';
import Navbar from './components/Navbar'; 
import { Routes,Route } from 'react-router-dom';
import Shop from './components/Shop';
import Who from './components/Who';
import MyProfile from './components/MyProfile';
import Newstand from './components/Newstand';
import Basket from './components/Basket';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Basket/>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/Who" element={<Who />}></Route>
        <Route path="/MyProfile" element={<MyProfile />}></Route>
        <Route path="/Newstand" element={<Newstand />}></Route>
      </Routes>
    </div>
  );
}

export default App;
