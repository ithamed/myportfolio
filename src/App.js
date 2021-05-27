import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Header from './Component/Header';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Exprience from './Component/Exprience';
import Education from './Component/Education';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './App.css';
import AboutMe from './Component/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/AboutMe' component={AboutMe} />
        <Route path='/Skills' component={Skills} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Exprience' component={Exprience} />
        <Route path='/Education' component={Education} />
        <Route path='/Contact' component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
