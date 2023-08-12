
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Welcome from './Components/Welcome';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/welcome' element={<Welcome />} /> */}
          <Route path='/parent1' element={<Parent1 />} />
          <Route path='/parent2' element={<Parent2 />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
