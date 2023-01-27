
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/about';
function App() {
  return (

    <>
    <Navbar title="Arpit Website"/>
    <div className="container my-3">
    <TextForm heading="Enter the text analyse below"/>
    <About/>
    </div>
    
    </>
  );
}

export default App;
