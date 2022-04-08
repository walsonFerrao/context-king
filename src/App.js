import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Firstform} from './Components/Form1'
import {Formtwo} from './Components/Form2'
function App() {







  return (
    

     <Routes>


     <Route path="/registration/one" element={<Firstform/>}/>
     <Route path="/registration/two" element={<Formtwo/>}/>

     </Routes>





 
  );
}

export default App;
