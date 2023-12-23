import './App.css';
import { slideData } from './Component/SliderData';
import Sliders from './Component/Sliders';
function App() {
  return (
    <>
      <Sliders slides={slideData} heading="Example Slider" />
    </>
  );
}

export default App;
