
import './App.css';
import Header from "./Components/Header"
import Input from "./Components/Input"
function App() {
  return (
    <div className="App">
      <div className="form-container mx-auto">
        <Header/>
        <div className="form">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
