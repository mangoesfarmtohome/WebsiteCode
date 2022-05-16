// import logo from './logo.svg';
import Mango from './Mango.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
          <header>
            <h1>Mangoes From Farm to Home</h1>
          </header>
          {/* <Routes> */}
          <div className="image">
            <img src={Mango} className="App-logo" alt="logo" />
          </div>
            
          {/* </Routes> */}
      {/* </BrowserRouter>    */}
    </div>
  );
}

export default App;
