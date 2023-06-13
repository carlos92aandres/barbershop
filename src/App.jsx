import "./App.css";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return <div className="bg-[url('/bgimage.png')] min-h-screen w-min-screen bg-cover bg-center">
<Navbar/>
<Home/>
<Experience/>


  

  </div>;
}

export default App;
