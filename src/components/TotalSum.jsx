import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotalSum } from '../reducer';

class TotalSum extends Component {
    render() {
        return (
            <div className="calc_block-total_sum">
                <div className="block_title biger">Стоимость паев</div>
                <div className="value">
                    {this.props.totalSum.toLocaleString()} <span className="rub_icon">&#8381;</span>{' '}
                </div>
                <button onClick={this.props.submit} className="btn">Получить</button>
            </div>
        );
    }
}

export default connect(
    state => ({
    totalSum: getTotalSum(state)
}),
    dispatch => ({
        submit: () => {
            dispatch({ type:"SUBMIT"})
        }
    })

    )(TotalSum);
