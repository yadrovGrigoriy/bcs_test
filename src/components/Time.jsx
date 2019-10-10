import React, { Component } from 'react'
import { connect } from 'react-redux'

class Time extends Component {
    render() {
        return (
        <div className="input_block-time">
            <div className="block_title">Срок инвестирования</div>
                <div className=" btn-group-toggle" data-toggle="buttons">
                    {
                        this.props.rate.map((item, index) => {
                            return <label key={ index + item.value } className={ this.props.currentChecked === index ? "btn active" : "btn" }>
                                <input 
                                    type="checkbox"
                                    onChange={ () => this.props.onChangePeriod(index) }
                                    checked={ this.props.currentChecked === index }
                                />
                                { item.title }
                            </label>
                        })
                    }
                </div>
        </div>
        )
    }
}

export default connect(
    state => ({
        rate: state.rate,
        currentChecked: state.currentPeriod
    }),
    dispatch => ({ 
        onChangePeriod: value => {
            dispatch({ type: 'PERIOD_CHECKED', payload: value })
        }
    }) 
)(Time)
