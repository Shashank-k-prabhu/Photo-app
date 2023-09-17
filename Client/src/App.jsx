
import './App.css';

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/contact';
import Portfolio from './Pages/Portfolio/portfolio';
import ErrorPage from './Pages/Error_page/Errorpage';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/Footer';
import Wedding from './Pages/SubLinks/Wedding/wedding';
import Estate from './Pages/SubLinks/Estate/estate';
import Fashion from './Pages/SubLinks/Fashion/fashion';
import Wildlife from './Pages/SubLinks/Wildlife/wildlife';
import Architecture from './Pages/SubLinks/Architecture/architecture';

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
          <Route path="/estate" element={<Estate/>}></Route>
          <Route path="/fashion" element={<Fashion/>}></Route>
          <Route path="/wildlife" element={<Wildlife/>}></Route>
          <Route path="/architecture" element={<Architecture />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>;
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
