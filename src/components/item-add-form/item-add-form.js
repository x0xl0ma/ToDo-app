import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ""
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
        console.log(this.state.label)
    };

    onSubmit = (e) => {
        e.preventDefault();

        const label = this.state.label.trim();

        if (label.length === 0) {
            return;
        };

        this.props.onItemAdded(label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form input-group"
                onSubmit={this.onSubmit}>

                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label}
                    required
                    pattern=".*\S.*" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary">
                        Add item
                    </button>
                </div>
            </form>
        )
    }
}