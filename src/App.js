import './App.css'
import Contact from './Contact';
import Educations from './Educations';
import Experience from './Experience';
import Skill from './Skill';
import Summary from './Summary';


function App() {
  const name = "Nagiyev Rustam";
  const title = "Web Developer";
 
  return (
    <div className="App">
      <header>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </header>
      <Contact/>
      <Educations/>
      <Experience/>
      <Skill />
      <Summary/>
     
    </div>
  );
}

export default App;