import Calculatrice from './components/calculatrice/calculatrice';
import {Clock} from './components/clock';
import Drumbox from './components/drumbox/drumbox';
import ParseToMkd from './components/markdownPreviewer/MarkDownPerviewer';
import Home from './components/home';
import { Navbar } from './components/navbar';
import Quotes from './components/quotesgenerator';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>
        
      </Route>
      <Route path='/calculatrice' element={<Calculatrice/>}>
    
      </Route>
      <Route path='/drumbox' element={<Drumbox/>}>
    
      </Route>
      <Route path='/markdownpreviewer' element={<ParseToMkd/>}>
    
      </Route>
      <Route path='/clock' element={<Clock/>}>
    
      </Route>
      <Route path='/randomquotes' element={<Quotes/>}>
    
      </Route>
    </Routes>
  </Router>
  </>
}

export default App;
