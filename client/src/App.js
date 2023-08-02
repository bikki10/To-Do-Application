import Title from "./components/Title";
import Example from "./components/Example";

function App() {
  const cars = ["a", "b", "c"];
  return (
    <>
      <>
        <Title name="TODO App" />
        <Example Car={cars} />
      </>
    </>
  );
}

export default App;
