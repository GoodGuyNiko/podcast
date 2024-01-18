import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import UserProfileCard from './components/UserProfileCard';
import Episodes from './components/Episodes';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Episoden" element={<Episodes />} />
      </Routes>
      {/* <UserProfileCard /> */}
      <Footer />
      </Router>
    </div>
  );
}

export default App;
