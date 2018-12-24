import React, { Component } from 'react';
import Axios from 'axios';
const Context = React.createContext();


const reducer = async (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT': {
            try {
                await Axios.delete(`https://jsonplaceholder.typicode.com/users/${action.payload}`);
            } catch {

            }
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        }
        case 'ADD_CONTACT': {
            const res = await Axios.post('https://jsonplaceholder.typicode.com/users', action.payload);
            return {
                ...state,
                contacts: [res.data, ...state.contacts]
            }
        }
        case 'UPDATE_CONTACT': {
            const id = action.payload.id;
            const res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, action.payload);
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    return (contact.id + "") === (id + "") ? (contact = res.data) : contact
                })
            }
        }
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [

        ],
        dispatch: async (action) => {
            const state = await reducer(this.state, action);
            this.setState(state);
        }
    };

    async componentDidMount() {
        const res = await Axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            contacts: res.data
        });
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;