import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as Action from '../actions';

const Dashboard = () => <h2>Header</h2>
const SurveryNew = () => <h2>Header</h2>

class App extends Component {

  componentDidMount () {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/survery/new' component={SurveryNew}></Route>
            <Route path='/surveys'exact component={Dashboard}></Route>
            <Route path='/' exact component={Landing}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, Action)(App);
