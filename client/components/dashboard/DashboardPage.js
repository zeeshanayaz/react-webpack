import React, { Component } from 'react';
import {Link} from "react-router";

class DashboardPage extends Component {
  constructor(params) {
    super(params);
  }

  componentDidMount(){
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {
        // create the chart
        debugger;
        Highcharts.stockChart('container', {
            title: {
                text: 'AAPL stock price by minute'
            },
            rangeSelector: {
                buttons: [{
                    type: 'hour',
                    count: 1,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1D'
                }, {
                    type: 'all',
                    count: 1,
                    text: 'All'
                }],
                selected: 1,
                inputEnabled: false
            },
            series: [{
                name: 'AAPL',
                type: 'candlestick',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
  }
  
  render() {
    return (
      <div>
  <div className="wrapper haslayout">
    <aside className="sidebar">
    <strong className="logo"><a href="#"><img src="images/logo.png" alt="logo" /></a></strong>
      <div className="bitinfo">
        <ul className="bitlistheader">
          <li>Coin</li>
          <li>Price</li>
          <li>Change</li>
        </ul>
        <ul className="bitlist">
          <li>TTT/ BTC</li>
          <li>0.00008000	</li>
          <li>0.67 %</li>
        </ul>
      </div>
      <div className="buyorder">
        <div className="title">
          <h2>Buy Order</h2>
        </div>
        <div className="bitinfo">
          <ul className="bitlistheader">
            <li>Size</li>
            <li>Price</li>
          </ul>
          <ul className="bitlist">
            <li>10.00</li>
            <li>0.00003300</li>
            <li>20.00</li>
            <li>0.00003200</li>
            <li>20.00</li>
            <li>0.00003100</li>
            <li>30.00</li>
            <li>0.00003000</li>
            <li>20.00</li>
            <li>0.00002500</li>
            <li>25.00</li>
            <li>0.00002400</li>
          </ul>
        </div>
      </div>
      <div className="buyorder">
        <div className="title">
          <h2>Sell Order</h2>
        </div>
        <div className="bitinfo">
          <ul className="bitlistheader">
            <li>Price</li>
            <li>Size</li>
          </ul>
          <ul className="bitlist">
            <li>0.00003300</li>
            <li>10.00</li>
            <li>0.00003200</li>
            <li>20.00</li>
            <li>0.00003100</li>
            <li>20.00</li>
            <li>0.00003000</li>
            <li>30.00</li>
            <li>0.00002500</li>
            <li>20.00</li>
            <li>0.00002400</li>
            <li>25.00</li>
          </ul>
        </div>
      </div>
      <div className="bitinfo-list">
        <div className="bitinfo">
          <ul className="bitlist">
            <li>TTT/ USD</li>
            <li>1.90000000</li>
            <li>0.00 %</li>
            <li>TSOFT/ BTC</li>
            <li>0.00048800</li>
            <li>-0.43 %</li>
            <li>TENTE/ BTC </li>
            <li>0.00005800</li>
            <li>-1.47 %</li>
            <li>TEME/ BTC</li>
            <li>0.00014100</li>
            <li>-0.47 %</li>
            <li>BTC/ USD</li>
            <li>16504.29000000</li>
            <li>0.00 %</li>
            <li>ETH/ BTC</li>
            <li>0.03150001</li>
            <li>0.00 %</li>
            <li>BCC/ BTC</li>
            <li>0.08750000</li>
            <li>0.00 %</li>
            <li>XRP/ BTC</li>
            <li>0.00001549</li>
            <li>0.15 %</li>
            <li>DASH/ BTC</li>
            <li>0.04696558</li>
            <li>0.00 %</li>
            <li>NEO/ BTC</li>
            <li>0.00221681</li>
            <li>0.07 %</li>
            <li>XMR/ BTC</li>
            <li>0.01710000</li>
            <li>0.00 %</li>
            <li>XEM/ BTC</li>
            <li>0.00002833</li>
            <li>1.08 %</li>
            <li>ETC/ BTC</li>
            <li>0.00165001</li>
            <li>-0.28 %</li>
          </ul>
        </div>
      </div>
    </aside>
    {/*************************************
			Sidebar End
	**************************************/}
    {/*************************************
				Main Start
	**************************************/}
    <div className="main haslayout">
      {/*************************************
				TTT and BTC Start
		**************************************/}
      <section className="tttandbtc haslayout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-9">
              <div className="btccontent-box">
                <div className="title">
                  <h2>TTT/BTC<i className="fa fa-caret-down" /></h2>
                </div>
                <div className="bitinfo">
                  <ul className="bitlistheader">
                    <li>0.00008000 BTC(0.00%)</li>
                    <li><span>High</span> 0.00036500 BTC</li>
                    <li><span>Low</span>  0.00002000 BTC</li>
                  </ul>
                  <div className="col-xs-12 col-sm-3">
                    <div className="img-box">
                      <figure>
                        <img src="images/img-01.png" alt="image description" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3">
                    <div className="col1">
                      <ul>
                        <li><span>Name</span>Total Trading Technology</li>
                        <li><span>Status</span>Active</li>
                        <li><span>Release Date</span>17 Jun 2017</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3">
                    <div className="col2">
                      <ul>
                        <li><span>Website</span>Bitotal.com</li>
                        <li><span>Announcement</span>https://bitcointalk.org/index.php?topic=1971261.0</li>
                        <li><span>Twitter</span>twitter.com/tttcoin</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3">
                    <div className="col3">
                      <ul>
                        <li><span>Total coins</span>5.000.000</li>
                        <li><span>Description</span>TTT is the cryptocurrencies Index that represent the
                          price movements of Bitcoin and the 20 largest altcoins.
                          The coin is conceived with the intention to create an
                          indication of the whole cryptocurrencies market.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <div className="btccontentinfo-box">
                <div className="title">
                  <h2><span>0.00000000 BTC</span><span>TTT 0.00000000</span></h2>
                </div>
                <div className="bitinfo">
                  <ul className="bitlistheader">
                    <li><span>0.00008000 BTC(0.00%)</span></li>
                  </ul>
                  <ul className="bitlist">
                    <li>Bid :0.00003300 BTC</li>
                    <li>Ask :0.00008100 BTC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*************************************
				TTT and BTC End
		**************************************/}
      {/*************************************
				Charts Start
		**************************************/}
      <section className="chart-section haslayout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-9">
              <div id="container" style={{height: 400, minWidth: 310}} />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <div className="buyselltab-box">
                <ul className="nav nav-tabs bitlistheader" role="tablist">
                  <li role="presentation" className="active"><a href="#buy" aria-controls="buy" role="tab" data-toggle="tab">BUY</a></li>
                  <li role="presentation"><a href="#sell" aria-controls="sell" role="tab" data-toggle="tab">SELL</a></li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content buyselltab">
                  <div role="tabpanel" className="tab-pane active" id="buy">
                    <form className="buyandsell-form">
                      <fieldset>
                        <div className="form-group">
                          <label>Amount</label>
                          <input type="text" className="form-control" name="number" placeholder={0.00000000} />
                        </div>
                        <div className="form-group">
                          <label>Price</label>
                          <input type="text" className="form-control" name="number" placeholder="0.00008100" />
                          <input type="text" className="form-control" name="number" placeholder="0.00000000 BTC" />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn">Buy TTT</button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="sell">
                    <form className="buyandsell-form">
                      <fieldset>
                        <div className="form-group">
                          <label>Amount</label>
                          <input type="text" className="form-control" name="number" placeholder={0.00000000} />
                        </div>
                        <div className="form-group">
                          <label>Price</label>
                          <input type="text" className="form-control" name="number" placeholder="0.00008100" />
                          <input type="text" className="form-control" name="number" placeholder="0.00000000 BTC" />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn">Buy TTT</button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*************************************
				Charts End
		**************************************/}
      {/*************************************
				Trade History Start
		**************************************/}
      <section className="trade-section haslayout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="buyorder">
                <div className="title">
                  <h2>Buy Order</h2>
                </div>
                <div className="bitinfo">
                  <ul className="bitlistheader">
                    <li>Size</li>
                    <li>Price</li>
                  </ul>
                  <ul className="bitlist">
                    <li>10.00</li>
                    <li>0.00003300</li>
                    <li>20.00</li>
                    <li>0.00003200</li>
                    <li>20.00</li>
                    <li>0.00003100</li>
                    <li>30.00</li>
                    <li>0.00003000</li>
                    <li>20.00</li>
                    <li>0.00002500</li>
                    <li>25.00</li>
                    <li>0.00002400</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="buyorder">
                <div className="title">
                  <h2>Sell Order</h2>
                </div>
                <div className="bitinfo">
                  <ul className="bitlistheader">
                    <li>Price</li>
                    <li>Size</li>
                  </ul>
                  <ul className="bitlist">
                    <li>0.00003300</li>
                    <li>10.00</li>
                    <li>0.00003200</li>
                    <li>20.00</li>
                    <li>0.00003100</li>
                    <li>20.00</li>
                    <li>0.00003000</li>
                    <li>30.00</li>
                    <li>0.00002500</li>
                    <li>20.00</li>
                    <li>0.00002400</li>
                    <li>25.00</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8">
              <div className="buyorder tradeinfo">
                <div className="title">
                  <h2>TRADE HISTORY</h2>
                </div>
                <div className="bitinfo">
                  <ul className="bitlistheader">
                    <li>Pair</li>
                    <li>Type</li>
                    <li>Price</li>
                    <li>Amount</li>
                    <li>Total</li>
                    <li>Date</li>
                  </ul>
                  <ul className="bitlist">
                    <li>TTT_BTC</li>
                    <li>BUY</li>
                    <li>0.00008000 BTC</li>
                    <li>30.00000000 TTT</li>
                    <li>0.00240000 BTC</li>
                    <li>11.12.2017 11:44</li>
                    <li>TTT_BTC</li>
                    <li>BUY</li>
                    <li>0.00008000 BTC</li>
                    <li>30.00000000 TTT</li>
                    <li>0.00240000 BTC</li>
                    <li>11.12.2017 11:44</li>
                    <li>TTT_BTC</li>
                    <li>BUY</li>
                    <li>0.00008000 BTC</li>
                    <li>30.00000000 TTT</li>
                    <li>0.00240000 BTC</li>
                    <li>11.12.2017 11:44</li>
                    <li>TTT_BTC</li>
                    <li>BUY</li>
                    <li>0.00008000 BTC</li>
                    <li>30.00000000 TTT</li>
                    <li>0.00240000 BTC</li>
                    <li>11.12.2017 11:43</li>
                    <li>TTT_BTC</li>
                    <li>BUY</li>
                    <li>0.00008000 BTC</li>
                    <li>30.00000000 TTT</li>
                    <li>0.00240000 BTC</li>
                    <li>11.12.2017 11:43</li>
                    <li>TTT_BTC</li>
                    <li>BUY</li>
                    <li>0.00008000 BTC</li>
                    <li>30.00000000 TTT</li>
                    <li>0.00240000 BTC</li>
                    <li>11.12.2017 11:44</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*************************************
				buyandsell info End
		**************************************/}
    </div>
    {/*************************************
				Main End
	**************************************/}
  </div>
  {/*************************************
				Wrapper End
**************************************/}
</div>
    );
  }
}

export default DashboardPage;
