
import './App.css';
import Header from "./Components/Header"
import Input from "./Components/Input/Input"
import Calender from "./Components/calender/Calender"
import Button from "./Components/SubmitButton"

function App() {
  return (
    <div className="App mb-5">
      <div className="form-container mx-auto">
        <Header/>
        <Input />
        <Calender />
        <Button />
      </div>
    </div>
  );
}

export default App;
