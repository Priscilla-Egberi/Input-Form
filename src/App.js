
import './App.css';
import Header from "./Components/Header"
import Input from "./Components/Input"
import Calender from "./Components/calender/Calender"
function App() {
  return (
    <div className="App mb-5">
      <div className="form-container mx-auto">
        <Header/>
        <div className="form">
          <Input />
        </div>
        <Calender />
      </div>
    </div>
  );
}

export default App;
