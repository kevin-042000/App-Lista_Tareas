import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import ListaTarea from '../src/Componentes/JSX/jsx principal/ListaTarea'
import LoginPage from '../src/Componentes/Pages/loginPage'
import registerPage from '../src/Componentes/Pages/registerPage'
import Boton from '../src/Componentes/JSX/fragmento jsx/boton'
import NotfoundPage from  '../src/Componentes/Pages/NotfoundPage'


function AppRouting() {

  let loggIn = true

  return (
   <Router>
    <Switch>
      <Route exact path='/'>
      { 
        loggIn ? 
        (<Redirect from='/' to='/wwwww' />)
        :
        (<Redirect from='/' to='/login'  />)
      }
      </Route>

      <Route exact path='/login' Component={ LoginPage } />

      <Route exact path='/Boton'>
      {
        loggIn ? 
        (<Boton/>)
        :
        (<Redirect from='/' to='/login' />)

      }
      </Route>

      <Route Component={ NotfoundPage }/>
    </Switch>
   </Router>

  );
}

export default AppRouting;
