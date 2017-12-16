import React, { Component } from 'react';
import {Link} from "react-router";

class FundsPage extends Component {
  constructor(params) {
    super(params);
  }
  
  render() {
    return (
<div className="wrapper haslayout">
<header id="header" className="header haslayout">
<div id="btc-sidebarwrapper" class="btc-sidebarwrapper">
<strong className="logo"><Link to="/home"><img src="images/logo.png" alt="logo" /></Link></strong>
<div id="btc-verticalscrollbar" class="btc-verticalscrollbar">
  <nav id="btc-navdashboard" class="btc-navdashboard">
    <ul>
      <li class="btc-active">
        <a href="index.html">Funds</a>
      </li>
      <li>
        <a href="account-management.html">Edit</a>
      </li>
      <li>
        <a href="analytics.html">Trade History</a>
      </li>
      <li>
        <a href="pending-requests.html">Orders History</a>
      </li>
      <li>
        <a href="support-management.html">Orders History</a>
      </li>
      <li>
        <a href="javascript:void(0);">Withdraw History</a>
      </li>
      <li>
        <a href="javascript:void(0);">API Keys</a>
      </li>
    </ul>
  </nav>
</div>
</div>
</header>
{/*************************************
      Header End
**************************************/}
{/*************************************
      Main Start
**************************************/}
<div className="main bg-img haslayout">
  {/*************************************
      Bitcoin Box Start
  **************************************/}
  <section className="bitcoin-box-area haslayout">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="bitcoin-box">
            <div className="title">
              <h2>Bitcoin</h2>
            </div>
            <div className="bitcoin-content">
              <ul>
                <li><span className="round green"><i className="fa fa-plus" /></span></li>
                <li><span className="round withe"><i className="fa fa-minus" /></span></li>
                <li><span className="round block"><i className="fa  fa-question" /></span></li>
              </ul>
              <span className="blance">Balance: 0.00000000</span>
            </div>
          </div>
          <div className="bitcoin-box">
            <div className="title">
              <h2>Bitcoin</h2>
            </div>
            <div className="bitcoin-content">
              <ul>
                <li><span className="round green"><i className="fa fa-plus" /></span></li>
                <li><span className="round withe"><i className="fa fa-minus" /></span></li>
                <li><span className="round block"><i className="fa  fa-question" /></span></li>
              </ul>
              <span className="blance">Balance: 0.00000000</span>
            </div>
          </div>
          <div className="bitcoin-box">
            <div className="title">
              <h2>Bitcoin</h2>
            </div>
            <div className="bitcoin-content">
              <ul>
                <li><span className="round green"><i className="fa fa-plus" /></span></li>
                <li><span className="round withe"><i className="fa fa-minus" /></span></li>
                <li><span className="round block"><i className="fa  fa-question" /></span></li>
              </ul>
              <span className="blance">Balance: 0.00000000</span>
            </div>
          </div>
          <div className="bitcoin-box">
            <div className="title">
              <h2>Bitcoin</h2>
            </div>
            <div className="bitcoin-content">
              <ul>
                <li><span className="round green"><i className="fa fa-plus" /></span></li>
                <li><span className="round withe"><i className="fa fa-minus" /></span></li>
                <li><span className="round block"><i className="fa  fa-question" /></span></li>
              </ul>
              <span className="blance">Balance: 0.00000000</span>
            </div>
          </div>
          <div className="bitcoin-box">
            <div className="title">
              <h2>Bitcoin</h2>
            </div>
            <div className="bitcoin-content">
              <ul>
                <li><span className="round green"><i className="fa fa-plus" /></span></li>
                <li><span className="round withe"><i className="fa fa-minus" /></span></li>
                <li><span className="round block"><i className="fa  fa-question" /></span></li>
              </ul>
              <span className="blance">Balance: 0.00000000</span>
            </div>
          </div>
          <div className="bitcoin-box">
            <div className="title">
              <h2>Bitcoin</h2>
            </div>
            <div className="bitcoin-content">
              <ul>
                <li><span className="round green"><i className="fa fa-plus" /></span></li>
                <li><span className="round withe"><i className="fa fa-minus" /></span></li>
                <li><span className="round block"><i className="fa  fa-question" /></span></li>
              </ul>
              <span className="blance">Balance: 0.00000000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*************************************
      Bitcoin Box End
  **************************************/}
</div>
{/*************************************
      Main End
**************************************/}
</div>
    );
  }
}

export default FundsPage;
