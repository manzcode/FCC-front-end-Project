// import logo from './logo.svg';
// import './App.css';
import Calculatrice from './components/calculatrice';
import {Clock} from './components/clock';
import ParseToMkd from './components/MarkDownPerviewer';
// import Quotes from './components/quotesgenerator';

function App() {

  return <>
    <ParseToMkd />
    <>
     <Clock/>
     <Calculatrice/>
     </>
  </>
}

export default App;
