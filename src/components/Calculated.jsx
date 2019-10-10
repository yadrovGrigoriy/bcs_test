import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { getIncomeSum } from '../reducers'

class Calculated extends Component {
    constructor(){
        super()
        this.chartRef = null
        
    }
 

    render() {
        return (
            <div className="calc_block-info">
                <div className="calc_block-profit">
                    <div className="calc_block-profit_item">
                        <div className="block_title">Инвестиции</div>
                        <div className="calc_block-value"> 
                            { this.props.investSum.toLocaleString() } 
                            <span className="rub_icon">&#8381;</span>   
                        </div>
                        <div className="calc_block-chart"></div>
                    </div>
                    <div className="calc_block-profit_item">
                        <div className="block_title">Прирост стоимости паев</div>
                        
                        <div className="calc_block-value"> 
                            { this.props.income.toLocaleString() } 
                            <span className="rub_icon">&#8381;</span>
                        </div>
                        { 
                            this.chartRef &&
                            this.props.investSum !== 0 &&
                            <div  
                                className="calc_block-chart_more" 
                                style={ { height: this.chartRef.clientHeight * this.props.rate.value / 100 + 'px' } } 
                            ></div> 
                        }
                        <div ref={ ( node ) =>  this.chartRef = node } className="calc_block-chart"></div>
                        
                    </div>
                </div>
                <div className="calc_block-profit_rate">Прирост стоимости паев <span className="rate_percents">{ this.props.rate.value } %</span></div>
            </div>  
        )
    }
}

export default connect(
    state => ({
        investSum:state.investSum,
        rate:state.rate[state.currentPeriod] ? state.rate[state.currentPeriod] : 0,
        income: getIncomeSum(state)
    })
)(Calculated)