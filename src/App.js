import React ,{ Component } from 'react';
//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
import './App.css';


class App extends Component {
render(){
  return (
    <div>
      <Navbar dark color="secondary">
        <div className='container'>
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>  
    </div>
  
  );
}
}
const element =<h1>esraa</h1>;


export default App;
