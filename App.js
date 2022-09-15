import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar2 from './component/Navbar2/Navbar2'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './component/Heading/Heading';
function App() {
  return (
   <>
<Heading></Heading>   
<Navbar2></Navbar2>

</>
  );
}

export default App;
