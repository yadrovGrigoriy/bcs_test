import React, { Component } from 'react';
import InvestmentAmount from './components/InvestmentAmount'
import Time from './components/Time'
import Calculated from './components/Calculated'
import TotalSum from  './components/TotalSum'

export default class App extends Component {
  

  render(){
    return (
      <div className="container">
        <div className="wrapper">
          <div className="input_block">
            <InvestmentAmount/>
            <Time/>
          </div>
          <div className="calc_block">
            <Calculated/> 
            <TotalSum/>  
          </div>
            
        </div>
      </div>
    );

  }
}


