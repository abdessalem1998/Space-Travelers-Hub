import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfil';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
