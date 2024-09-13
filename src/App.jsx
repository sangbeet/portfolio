import Navbar from "./Components/Navbar";
import Tubelight from "./Components/Tubelight";
import ShootingStar from "./Components/ShootingStar"
import About from "./Components/About";
import './App.css'
import Contact from "./Components/Contact";
import Carousel from "./Components/Carousel";

function App() {

  return (
<div className="App">
<ShootingStar/>
<div className="app">
  <Navbar/>
  <Tubelight/>
</div>
<About/>
<Carousel/>
<Contact/>
</div>
)
}

export default App
