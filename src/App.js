import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';
import Achievements from './components/Achievements';
import Responsibilities from './components/Responsibilities';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Education/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
      <Achievements/>
      <Responsibilities/>
      
      
     
    </div>
  );
}

export default App;
