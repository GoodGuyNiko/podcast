import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Episodes from './components/Episodes';
import Hosts from './components/Hosts'
import Folge1 from './Folgen/Folge1'
import Folge2 from './Folgen/Folge2';
import Folge3 from './Folgen/Folge3';
import Folge4 from './Folgen/Folge4';
import Folge5 from './Folgen/Folge5';
import Folge6 from './Folgen/Folge6';


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
        <Route path="/brandit-folge-2" element={<Folge2 />} />
        <Route path="/brandit-folge-3" element={<Folge3 />} />
        <Route path="/brandit-folge-4" element={<Folge4 />} />
        <Route path="/brandit-folge-5" element={<Folge5 />} />
        <Route path="/brandit-folge-6" element={<Folge6 />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
