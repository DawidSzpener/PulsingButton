import './App.css';
import PulsingButton from './components/PulsingButton'

function App() {
  return (
    <div className="App">
      <div style={{float: "left", marginLeft: "5%"}}>
        <PulsingButton animating round text="Button" styles="red"/><br /><br />
      </div>
    </div>
  );
}

export default App;
