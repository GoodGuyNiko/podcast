import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Episodes from './components/Episodes';
import Hosts from './components/Hosts'
import Folge1 from './Folgen/Folge1'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Episoden" element={<Episodes />} />
        <Route path="/Hosts" element={<Hosts />} />
        <Route path="/brandit-folge-1" element={<Folge1 />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
