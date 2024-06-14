import "./App.css";
import rightArrowIcon from './assets/icons/arrow-right-line.svg';
import { Button } from "./components/button";

function App() {
  const Icon = () => (<img src={rightArrowIcon} />)
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button label="Read More" onClick={() => {}} rightAddOnIcon={<Icon />} />
    </>
  );
}

export default App;
