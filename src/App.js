import './App.css';
import Nav from './components/Nav';
import SandR from './API/SandR';
import HealthBody from './API/HealthBody';
import NatureEnv from './API/NatureEnv';
import SchoolLife from './API/SchoolLife';
import Travel from './API/Travel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Listpage from './API/Listpage';
import Allpurpose from './API/AllPurpose';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/home' component={Listpage} />
      <Route path="/list" component={Allpurpose}/>
      <Route path="/socializingandrelationship" component={SandR}/>
      <Route path="/allpurpose" component={Allpurpose}/>
      <Route path="/healthandbody" component={HealthBody}/>
      <Route path="/natureandenvironment" component={NatureEnv}/>
      <Route path="/schoollife" component={SchoolLife}/>
      <Route path="/travel" component={Travel}/>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
