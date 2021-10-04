import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>            
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/services'>
            <Services/>
          </Route>
          <Route path='/about'>
            <AboutUs/>
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
