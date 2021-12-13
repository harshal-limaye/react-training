import React from "react";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('loaded!');
    }

    render() {
        return <div>
            {this.state.count}&nbsp;<button onClick={this.increment.bind(this)}>+</button><button onClick={this.decrement.bind(this)}>-</button>
        </div>
    }

    increment() {
        const newValue = this.state.count + 1;
        this.setState({ count: newValue });
    }

    decrement() {
        if (this.state.count > 0) {
            const newValue = this.state.count - 1;
            this.setState({ count: newValue });
        }
    }
}