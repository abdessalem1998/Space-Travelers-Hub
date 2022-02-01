import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rocket';
import MyProfile from './pages/MyProfil';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
