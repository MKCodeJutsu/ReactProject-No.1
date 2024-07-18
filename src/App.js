import {Routes, Route} from 'react-router-dom'
import Html from "./pages/html";
import JavaScript from "./pages/javascript";
import Css from "./pages/css";
import Home from "./pages/home";
function App() {
  return <div> 
    <div className="app">
      <h1>Welcome To React App !!</h1>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/html' element= {<Html/>} />
        <Route path='/css' element= {<Css/>} />
        <Route path='/javascript' element= {<JavaScript/>} />
      </Routes>
    </div>
  </div>
}
export default App;