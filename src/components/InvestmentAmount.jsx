import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateValues } from '../util';

class InvestmentAmount extends Component {
    render() {
        return (
            <div className="input_block-amount">
                <div className="input_block-sum_info">
                    <div className="block_title">Сумма для инвестирования</div>
                    <div className="input_block-invest_sum">
                        {this.props.investSum.toLocaleString()}
                        <span className="rub_icon">&#8381;</span>
                    </div>
                </div>
                <input
                    type="range"
                    className="custom-range"
                    max="3000000"
                    min="50000"
                    step="50000"
                    value={this.props.investSum}
                    onChange={event => this.props.onRangeChange(event.target.value)}
                />
                <ul className="input_block-values">
                    {this.props.values.map((value, index) => {
                        if (value !== '') {
                            return (
                                <li key={index} className="input_block-values-item">
                                    {' '}
                                    <span className="marker">{value}т.</span>{' '}
                                </li>
                            );
                        } else
                            return (
                                <li key={index} className="input_block-values-item empty">
                                    {value}
                                </li>
                            );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        investSum: state.investSum,
        values: generateValues()
    }),
    dispatch => ({
        onRangeChange: value => {
            if (value === '') value = 0;
            dispatch({ type: 'INVEST_SUM_CHANGED', payload: value });
        }
    })
)(InvestmentAmount);
