
import './App.css';

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/contact';
import Portfolio from './Pages/Portfolio/portfolio';
import ErrorPage from './Pages/Error_page/Errorpage';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/Footer';
import Wedding from './Pages/SubLinks/Wedding/wedding';
import Birthday from './Pages/SubLinks/Birthday/birthday';
import Dance from './Pages/SubLinks/Dance/dance';
import Office from './Pages/SubLinks/Office/office';
import Music from './Pages/SubLinks/Music/music';
function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/dance" element={<Dance />}></Route>
          <Route path="/office" element={<Office />}></Route>
          <Route path="/birthday" element={<Birthday />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>;
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
