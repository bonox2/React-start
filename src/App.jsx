import "./App.css";
import NumButton from './components/NumButton';
import useNumber from './hooks/useNumber';



function App() {
  const [num, setNum] = useNumber()

  return (
    <>
      <div className="App">
        {num}
      </div>
      <NumButton></NumButton>
    </> 
  );
}

export default App;
