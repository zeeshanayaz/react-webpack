import React, { Component } from 'react';
import {Link} from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <header id="header" className="header haslayout">
        <div className="mainheader">
          <div className="search-area">
            <form className="search-form">
              <fieldset>
                <input type="text" className="form-control" name="search" placeholder="search.." />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </fieldset>
            </form>
          </div>
          <div className="btn-area">
            <a href="#" className="login-btn">Log in</a>
            <a href="#" className="account-btn">Create Account</a>
          </div>
          <nav id="nav" className="nav">
            <ul className="navigation">
              <li><Link to="/home">Trade</Link></li>
              <li><Link to="/funds">Funds</Link></li>
              <li><Link to="#">Order</Link></li>
              <li><Link to="#">Accounts</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
        {this.props.children}
      </div>
    );
  }
}

export default App;
