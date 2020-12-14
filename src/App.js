import './App.css';
import PulsingButton from './components/PulsingButton'

function App() {
  return (
    <div className="App">
      <div>
        <PulsingButton text="Button" animating round styles="red"/><br /><br />
        <PulsingButton text="Button" animating round styles="green"/><br /><br />
        <PulsingButton text="Button" animating round styles="black"/><br /><br />
        <PulsingButton text="Button" animating round styles={null}/>
      </div>
    </div>
  );
}

export default App;
