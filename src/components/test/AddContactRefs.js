import React, { Component } from 'react'

class AddContact extends Component {

    constructor() {
        super();
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
    }

    static defaultProps = {
        name: 'Fred Smith',
        email: 'fs@yh.com',
        phone: '777-77-7777'
    };

    render() {

        const { name, email, phone } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                defaultValue={name}
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                ref={this.nameInput} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                defaultValue={email}
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                ref={this.emailInput} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                defaultValue={phone}
                                type="phone"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                                ref={this.phoneInput}
                            />

                        </div>
                        <input type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
