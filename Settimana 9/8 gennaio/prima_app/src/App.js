/*
rfc -> React Function Component
rcc -> React Class Component
rafc -> React Arrow Function Component
*/
import './App.css';
import ButtonComp from "./Components/ButtonComponent"
import ImageComp from "./Components/ImageComponent"

export default function App() {
  return (
    <div className="App">
      <h1>Prima App React!</h1>
      <ButtonComp />
      <ImageComp />
    </div>


  );
}

