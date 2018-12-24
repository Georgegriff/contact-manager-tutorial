import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        // check for errs
        if (name === '') {
            this.setState({ errors: { name: 'Name is Required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is Required' } });
            return;

        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is Required' } });
            return;

        }

        dispatch({
            type: 'ADD_CONTACT',
            payload: {
                name,
                email,
                phone
            }
        });

        // tidy up

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/');
    }

    render() {

        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup value={name}
                                        onChange={this.onInputChange.bind(this)}
                                        name="name"
                                        label="Name"
                                        className="form-control form-control-lg"
                                        error={errors.name}
                                        placeholder="Enter Name..." />

                                    <TextInputGroup
                                        value={email}
                                        onChange={this.onInputChange.bind(this)}
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Email..."
                                        error={errors.email}
                                        label="Email"
                                    />

                                    <TextInputGroup
                                        value={phone}
                                        onChange={this.onInputChange.bind(this)}
                                        type="phone"
                                        name="phone"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Phone..."
                                        error={errors.phone}
                                        label="Phone"
                                    />

                                    <input type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    );
                }

                }
            </Consumer>
        )
    }
}

export default AddContact;
