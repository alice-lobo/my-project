import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Maria';
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <p>Meu primeiro App</p>
      
      <SayMyName name="Mateus" />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <Pessoa 
        foto="https://via.placeholder.com/150"
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
      
      />
    </div>
  );
}

export default App;
