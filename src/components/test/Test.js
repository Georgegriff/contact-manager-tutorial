import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title: '',
        body: ''
    }
    /**
     * https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705
     */

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(({ title, body }) => this.setState({ title, body }))
    }

    /**
     * Will be deprecated
     */
    componentWillMount() {
        console.log('componentWillMount...')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate...')
    }

    /**
    * Will be deprecated
    */
    componentWillUpdate() {
        console.log('componentWillUpdate...')
    }

    /**
    * Will be deprecated
    */
    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps...')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            test: 'something'
        };
    }

    /**
     * Before dom is updated
     */

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate...')
    }
    render() {
        return (
            <div>
                <h1>Test Component</h1>
                <h2>{this.state.title}</h2>
                <p>{this.state.body}</p>
            </div>
        )
    }
}
