import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context';
import { Link } from 'react-router-dom'
class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired
    };

    state = {
        showContactInfo: false
    }

    toggle() {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    }

    onDelete = (dispatch, id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    }

    render() {
        const { name, email, phone, id } = this.props.contact;
        const { showContactInfo } = this.state;
        const toggleContactShow = (showContactInfo) => {
            return showContactInfo ? 'fas fa-angle-down' : 'fas fa-angle-right';
        };

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}&nbsp;
                                <i onClick={this.toggle.bind(this)}
                                    className={toggleContactShow(showContactInfo)}
                                    style={{ cursor: 'pointer' }}></i>
                                <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDelete.bind(this, dispatch, id)}></i>
                                <Link to={`contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'black',
                                            fontSize: '18px',
                                            marginRight: '1rem'
                                        }}></i></Link>
                            </h4>
                            {
                                showContactInfo ?
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {email}</li>
                                        <li className="list-group-item">Phone: {phone}</li>
                                    </ul> : null
                            }

                        </div>
                    )
                }}
            </Consumer>

        )
    }
}

export default Contact;
