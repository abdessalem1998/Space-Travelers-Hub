import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfil';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
