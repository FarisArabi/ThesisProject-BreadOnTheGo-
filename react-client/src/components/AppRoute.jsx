import React from 'react'
import $ from 'jquery'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Products from './Products.jsx'
import SignIn from './SignIn.js'
import SignUp from './SignUp';
import Navcom from './navbar.jsx';
import Profile from './Profile.jsx';
import ProductList from './ProductList.jsx';
import SearchProduct from './SearchProduct.jsx';
import image from './image.jsx'
import Home from './Home.jsx';

class AppRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <BrowserRouter history={hashHistory}>
        <Switch>
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/prouducts' component={Products} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/' component={Navcom}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/SearchProduct'component={SearchProduct}/>
          <Route exact path ='/image' component={image}/>
          <Route exact path='/map' component={Home}/>
          <Route exact path='/ProductList' component={ProductList} />

         </Switch>

      </BrowserRouter>
    )
  }
}

export default AppRoute;
