
import './App.css';

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/contact';
import Portfolio from './Pages/Portfolio/portfolio';
import ErrorPage from './Pages/Error_page/Errorpage';
import Navbar from './Components/Navbar/navbar';


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="" element={<ErrorPage />}></Route>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
