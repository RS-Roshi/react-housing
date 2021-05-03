import './App.css';
import Loader from './components/loader'
import AppHeader from './components/header'
import AppFooter from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import BuilderPage from './pages/builder';
import ProjectPage from './pages/project';
import TeamPage from './pages/team';
import ErrorPage from './pages/404';

function App() {
  return (
    <Router>
      <Loader />
      <AppHeader />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/builder" exact>
          <BuilderPage />
        </Route>
        <Route path="/project" exact>
          <ProjectPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/not-found" >
          <ErrorPage />
        </Route>
        <Redirect from="*" to='/not-found' />
      </Switch>

      <AppFooter />
    </Router>
  );
}

export default App;
