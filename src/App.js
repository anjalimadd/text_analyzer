import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';

function App() {
  return (
    <>

 
      <Navbar title="TextUtils" aboutText="aboutText"/>
      <div className="container">
      <TextForm heading="Enter the text to analyze"/>
      </div>
      

    </>
   

  );
}

export default App;
