import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Wellcome from './components/Wellcome';
import Message from './components/message';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman"/>
      <p>this is child</p>
      <Greet name="clark" heroName="Superman"/>

      <Wellcome name="Bruce" heroName="Batman"/>
      <Wellcome name="clark" heroName="Superman"/> */}

      <Message />
    </div>
  );
}

export default App;
